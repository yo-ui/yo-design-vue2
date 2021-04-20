/**
 *  author: eric
 *  create at: 2021-04-19
 *  列表项元数据组件入口
 */
import ListItemMeta from "./ListItemMeta";

ListItemMeta.install = function(Vue) {
  Vue.component(ListItemMeta.name, ListItemMeta);
};

export default ListItemMeta;
