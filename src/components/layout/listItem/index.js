/**
 *  author: eric
 *  create at: 2021-04-19
 *  列表项组件入口
 */
import ListItem from "./ListItem";

ListItem.install = function(Vue) {
  Vue.component(ListItem.name, ListItem);
};

export default ListItem;
