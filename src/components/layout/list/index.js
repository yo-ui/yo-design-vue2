/**
 *  author: eric
 *  create at: 2021-04-19
 *  列表组件入口
 */
import List from "./List";

List.install = function(Vue) {
  Vue.component(List.name, List);
};

export default List;
