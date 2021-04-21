/**
 * 页面路由名称
 */
export default {
  // "个人中心",
  "*": { name: "*", path: "*", title: "404 Not Found" },
  index: { name: "index", path: "/", title: "首页" },
  component: { name: "component", path: "/component", title: "组件页" },
  componentGuide: { name: "componentGuide", path: "", title: "组件入门页" },
  componentButton: {
    name: "componentButton",
    path: "basic/button",
    title: "按钮组件"
  },
  componentLink: {
    name: "componentLink",
    path: "basic/link",
    title: "文字链接组件"
  },
  componentIcon: {
    name: "componentIcon",
    path: "basic/icon",
    title: "图标组件"
  },
  componentColor: {
    name: "componentColor",
    path: "basic/color",
    title: "配色"
  },
  componentFont: { name: "componentFont", path: "basic/font", title: "字体" },
  componentGrid: {
    name: "componentGrid",
    path: "layout/grid",
    title: "网格组件"
  },
  componentLayout: {
    name: "componentLayout",
    path: "layout/layout",
    title: "布局组件"
  },
  componentList: {
    name: "componentList",
    path: "layout/list",
    title: "列表组件"
  },
  componentCard: {
    name: "componentCard",
    path: "layout/card",
    title: "卡片组件"
  },

  componentInput: {
    name: "componentInput",
    path: "form/input",
    title: "输入框组件"
  },
  componentRadio: {
    name: "componentRadio",
    path: "form/radio",
    title: "单选框组件"
  },
  componentCheckbox: {
    name: "componentCheckbox",
    path: "form/checkbox",
    title: "复选框组件"
  },

  componentBreadcrumb: {
    name: "componentBreadcrumb",
    path: "navigation/breadcrumb",
    title: "面包屑组件"
  },

  login: { name: "login", path: "/signin", title: "登录" },
  reg: { name: "reg", path: "/signup", title: "注册" },
  contact: { name: "contact", path: "/contact", title: "联系我们" }
};
