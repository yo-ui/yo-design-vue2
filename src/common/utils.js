//获取鼠标坐标
export function getMousePosition(e, offset = { x: 0, y: 0, ratio: 1 }) {
  if (!offset.ratio) {
    offset.ratio = 1;
  }
  var x = e.pageX || e.clientX;
  var y = e.pageY || e.clientY;
  return {
    x: (x - offset.x) / offset.ratio,
    y: (y - offset.y) / offset.ratio
  };
}

/**
 * 判断子元素是否匹配
 * @param {*} slot  Array<VNode>  默认插槽元素
 * @param {*} childs  Array<String>
 * @returns
 */
export function isCorrectChilds(slots, children = []) {
  // let childs = this.$slots.default;
  let { length = 0 } = slots || [];
  while (length-- > 0) {
    let item = slots[length];
    let { componentOptions = {} } = item || {};
    let { tag = "" } = componentOptions || {};
    // if (tag !== "y-list-item") {
    //   console.warn("y-list组件子组件只能为y-list-item");
    //   return false;
    // }
    if (children.indexOf(tag) < 0) {
      console.warn(`组件子组件只能为${children.join()},当前子组件为${tag}`);
      return false;
    }
  }
  return true;
}
