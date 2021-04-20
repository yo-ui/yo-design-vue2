/*
 *  author :eric
 *  created at:2019-12-12
 *  组件列表
 */
// 基础组件

// button
import Button from "./components/basic/button";
import ButtonGroup from "./components/basic/buttonGroup";
// link
import Link from "./components/basic/link";
// icon
import Icon from "./components/basic/icon";

// 布局组件
import Container from "./components/layout/container";
import Side from "./components/layout/side";
import Header from "./components/layout/header";
import Main from "./components/layout/main";
import Footer from "./components/layout/footer";
// grid
import Row from "./components/layout/row";
import Col from "./components/layout/col";
import List from "./components/layout/list";
import ListItem from "./components/layout/listItem";
import ListItemMeta from "./components/layout/listItemMeta";

// input
import Input from "./components/form/input";
import Radio from "./components/form/radio";
import Checkbox from "./components/form/checkbox";
import Form from "./components/form/form";
import FormItem from "./components/form/formItem";

// breadcrumb
import BreadcrumbItem from "./components/navigation/breadcrumb";
import Breadcrumb from "./components/navigation/breadcrumbItem";

const components = [
  Container,
  Side,
  Header,
  Main,
  Footer,

  Row,
  Col,
  List,
  ListItem,
  ListItemMeta,

  Button,
  ButtonGroup,
  Link,
  Icon,

  Breadcrumb,
  BreadcrumbItem,

  Form,
  FormItem,
  Input,
  Radio,
  Checkbox
];

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
  let config = opts.config || {};
  Vue.prototype.$YOUI = {
    size: config.size | "", //组件大小
    zIndex: config.zIndex || 1000 //弹出框索引
  };
};

/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  version: "1.0.0",
  install,

  Container,
  Side,
  Header,
  Main,
  Footer,

  Button,
  ButtonGroup,
  Link,
  Icon,

  Row,
  Col,
  List,
  ListItem,
  ListItemMeta,

  Breadcrumb,
  BreadcrumbItem,

  Form,
  FormItem,
  Input,
  Radio,
  Checkbox
};
