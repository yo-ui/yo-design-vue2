export default {
  //获取鼠标坐标
  getMousePosition(e, offset = { x: 0, y: 0, ratio: 1 }) {
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
};
