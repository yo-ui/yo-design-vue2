<template>
  <div class="yo-split" ref="yoSplitRef">
    <!-- 水平布局 -->
    <template v-if="type === 'horizontal'">
      <slot name="left" v-if="$scopedSlots.left"></slot>
      <div class="yo-split-horizontal-line">
        <slot name="trigger" v-if="$scopedSlots.trigger"></slot>
        <template v-else>
          <i
            class="yo-split-horizontal-line-center"
            v-for="item in 5"
            :key="item"
          ></i>
        </template>
      </div>
      <slot name="right" v-if="$scopedSlots.right"></slot>
    </template>
    <!-- 垂直布局 -->
    <template v-if="type === 'vertical'">
      <slot name="top" v-if="$scopedSlots.top"></slot>
      <div class="yo-split-vertical-line">
        <!-- 自定义分割拖拽点 -->
        <slot name="trigger" v-if="$scopedSlots.trigger"></slot>
        <template v-else>
          <i
            class="yo-split-vertical-line-center"
            v-for="item in 5"
            :key="item"
          ></i>
        </template>
      </div>
      <slot name="bottom" v-if="$scopedSlots.bottom"></slot>
    </template>
  </div>
</template>
<script>
/**
 *
 * author: eric
 * create at: 2021-04-23 16:00:31
 *
 **/
// import yoCommon from '@/common/common'
import { getMousePosition } from "../../../common/utils";
let prefix = "yo-split";
export default {
  name: "ySplit",
  //存放 数据
  data() {
    return {};
  },
  //存放 子组件
  // template: '',
  // 注意： 组件中的 所有 props 中的数据，都是通过 父组件传递给子组件的
  // props 中的数据，都是只读的，无法重新赋值
  props: {
    // 面板位置，可以是 0~1 代表百分比，或具体数值的像素，可用 v-model 双向绑定
    value: {
      type: Number,
      default: 0.5
    },
    // 是否显示边框
    border: {
      type: Boolean,
      default: true
    },
    //边框圆角
    borderRadius: {
      type: Number,
      default: 0
    },
    // 类型，可选值为 horizontal 或 vertical
    type: {
      type: String,
      default: "horizontal"
    },
    // 最小阈值  距离左边的最小宽度
    min: {
      type: [Number, String],
      default: 40
    },
    // 最大阈值  距离右边的最小宽度
    max: {
      type: [Number, String],
      default: 40
    }
  }, // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
  computed: {
    yoClasses() {
      let { border } = this;
      return {
        [`${prefix}-border`]: !!border
      };
    },
    yoStyles() {
      let { borderRadius } = this;
      let yoStyles = {
        "border-radius": `${
          isNaN(borderRadius) ? borderRadius : borderRadius + "px"
        }`
      };
      return yoStyles;
    }
  },
  //存放 方法
  methods: {
    init() {
      let yoSplitRef = this.$refs.yoSplitRef;
      yoSplitRef.addEventListener("mousedown", this.mouseDownEvent);
    },
    //拖拽开始事件
    mouseDownEvent(e) {
      let { target } = e;
      let { className } = target;
      let flag = false; //是否可以移动
      if (className.indexOf(".yo-split-horizontal-line") > -1) {
        //左右移动
        flag = true;
      } else if (className.indexOf(".yo-split-vertical-line") > -1) {
        //上下移动
        flag = true;
      }
      if (!flag) {
        return;
      }
      let startPos = getMousePosition(e);
      let yoSplitRef = this.$refs.yoSplitRef;
      yoSplitRef.addEventListener("mousemove", this.mouseMoveEvent);
      yoSplitRef.addEventListener("mouseup", this.mouseUpEvent);
      this._startPos = startPos;
      this.$emit("moveStart", e);
    },
    // 拖拽中事件
    mouseMoveEvent(e) {
      let pos = getMousePosition(e);
      this.moving(pos);
      this.$emit("moving", e);
    },
    moving(pos = {}) {
      let { type, _startPos = {} } = this;
      let dis = {
        x: pos.x - _startPos.x,
        y: pos.y - _startPos.y
      };
      if (type === "vertical") {
      } else if (type === "horizontal") {
      }
    },
    //拖拽结束事件
    mouseUpEvent(e) {
      let yoSplitRef = this.$refs.yoSplitRef;
      yoSplitRef.removeEventListener("mousemove", this.mouseMoveEvent);
      yoSplitRef.removeEventListener("mouseup", this.mouseUpEvent);
      this.$emit("moveEnd", e);
    }
  },
  //存放 过滤器
  filters: {},
  //自定义 私有指令
  directives: {},
  /*  生命周期函数  */
  //创建期间
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.init();
  },
  //运行期间
  beforeUpdate() {},
  updated() {},
  //销毁时期
  beforeDestroy() {},
  destroyed() {}
};
</script>
