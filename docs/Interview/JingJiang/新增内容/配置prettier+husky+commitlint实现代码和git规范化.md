# 从零搭建后台管理系统---项目配置 eslint 和 prettier

**1,安装 eslint**

```bash
npm i eslint -D
```

**2,生成配置文件：eslint.cjs**

```bash
npx eslint --init
```

**3， vue3 环境代码校验插件**

```
# 让所有与prettier规则存在冲突的Eslint rules失效，并使用prettier进行代码检查
"eslint-config-prettier": "^8.6.0",
"eslint-plugin-import": "^2.27.5",
"eslint-plugin-node": "^11.1.0",
# 运行更漂亮的Eslint，使prettier规则优先级更高，Eslint优先级低
"eslint-plugin-prettier": "^4.2.1",
# vue.js的Eslint插件（查找vue语法错误，发现错误指令，查找违规风格指南
"eslint-plugin-vue": "^9.9.0",
# 该解析器允许使用Eslint校验所有babel code
"@babel/eslint-parser": "^7.19.1"
```

安装指令

```
cnpm install -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier eslint-plugin-node @babel/eslint-parser
```

**4，修改.eslintrc.cjs 配置文件**

**5,在项目根目录下新建.eslintignore 忽略文件**

```javascript
dist;
node_modules;
```

**6，运行脚本**

package.json 新增两个运行脚本

```bash
"scripts": {
"lint": "eslint src",
"fix": "eslint src --fix",
}
```

## **二，配置 prettier**

**2.1 安装依赖包**

```
pnpm install -D eslint-plugin-prettier prettier eslint-config-prettier
```

**2.2.prettierrc.json 添加规则**

{
"singleQuote": true,
"semi": false,
"bracketSpacing": true,
"htmlWhitespaceSensitivity": "ignore",
"endOfLine": "auto",
"trailingComma": "all",
"tabWidth": 2
}
**2.3.prettierignore 忽略文件**

```cobol
/dist/*
/html/*
.local
/node_modules/**
**/*.svg
**/*.sh
/public/*
```

# 从零搭建后台管理系统---配置 husky

**1 安装`husky`**

```undefined
pnpm install -D husky
```

执行

```csharp
npx husky-init    在package.json当中会有一个命令prepare  
必须先有git,然后需要npm run prepare 
在目录下会有一个.husky文件夹出现
```

**2.创建.husky 文件夹添加 pre-commit 文件添加如下代码**

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint
```

给 pre-commit 文件添加执行权限

```
chmod +x .husky/pre-commit
```

`chmod` 命令是 Linux/Unix 系统下的命令，Windows 系统下没有这个命令，所以在 Windows 的 cmd 终端里执行 `chmod +x .husky/pre-commit` 是无法给 pre-commit 文件添加执行权限的。

如果你是在 Windows 系统下进行开发，需要安装 Git Bash 或者 WSL（Windows Subsystem for Linux）等工具来模拟 Linux/Unix 环境，然后再在 Git Bash 或者 WSL 终端里执行 `chmod +x .husky/pre-commit` 命令来给 pre-commit 文件添加执行权限。

不过，如果你使用的是 VS Code 编辑器，也可以在编辑器中打开 pre-commit 文件，然后在编辑器的终端面板里执行 `chmod +x .husky/pre-commit` 命令来给 pre-commit 文件添加执行权限。

# 从零搭建后台管理系统---配置 commitlint

**安装包**

```sql
cnpm i @commitlint/config-conventional @commitlint/cli -D
```

添加配置文件，新建`commitlint.config.cjs`(注意是 cjs)，然后添加下面的代码：

```javascript
module.exports = {
  extends: ["@commitlint/config-conventional"],
  // 校验规则
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "chore",
        "revert",
        "build",
      ],
    ],
    "type-case": [0],
    "type-empty": [0],
    "scope-empty": [0],
    "scope-case": [0],
    "subject-full-stop": [0, "never"],
    "subject-case": [0, "never"],
    "header-max-length": [0, "always", 72],
  },
};
```

在`package.json`中配置 scripts 命令

```javascript
# 在scrips中添加下面的代码
{"scripts": {
    "commitlint": "commitlint --config commitlint.config.cjs -e -V"
}
 ,}
```

**配置结束，现在当我们填写`commit`信息的时候，前面就需要带着下面的`subject`**

```javascript
'feat',//新特性、新功能
'fix',//修改bug
'docs',//文档修改
'style',//代码格式修改, 注意不是 css 修改
'refactor',//代码重构
'perf',//优化相关，比如提升性能、体验
'test',//测试用例修改
'chore',//其他修改, 比如改变构建流程、或者增加依赖库、工具等
'revert',//回滚到上一个版本
'build',//编译相关的修改，例如发布版本、对项目构建或者依赖的改动
```

**配置 husky**

```javascript
npx husky add .husky/commit-msg
```

在生成的 commit-msg 文件中添加下面的命令

```javascript
    #!/usr/bin/env sh
    . "$(dirname -- "$0")/_/husky.sh"
    npm run commitlint
```

我们 commit 提交信息时，就不能再随意写了，必须是 git commit -m 'fix: xxx' 符合类型的才可以，**需要注意的是类型的后面需要用英文的 :，并且冒号后面是需要空一格的，这个是不能省略的**





配置完成后可能eslint会对当前写的代码报很多警告和错误，那么我 们需要专门针对规则去做更改

根据警告的信息在eslintrc.cjs当中配置rules