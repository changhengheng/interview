import nav from "./nav";
import sidebar from "./sidebar";

module.exports = {
  title: "Hello VitePress",
  description: "Just playing around.",
  base: "/vitepress/",
  themeConfig: {
    outline: {
      level: [2, 6],
      label: "In this article",
    },
    nav,
    sidebar,
    lastUpdated: "last update",
  },
};
