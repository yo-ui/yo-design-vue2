<template>
  <div class="yo-split" ref="yoSplitRef" :class="yoClasses" :style="yoStyles">
    <!-- 水平布局 -->
    <template v-if="type === 'horizontal'">
      <div class="yo-split-left" :style="yoLeftStyles" v-if="$scopedSlots.left">
        <slot name="left"></slot>
      </div>
      <div
        class="yo-split-horizontal-line"
        ref="yoLineHorizontal"
        :style="yoLineStyles"
      >
        <slot name="trigger" v-if="$scopedSlots.trigger"></slot>
        <template v-else>
          <i
            class="yo-split-horizontal-line-center"
            v-for="item in 8"
            :key="item"
          ></i>
        </template>
      </div>
      <div
        class="yo-split-right"
        :style="yoRightStyles"
        v-if="$scopedSlots.right"
      >
        <slot name="right"></slot>
      </div>
    </template>
    <!-- 垂直布局 -->
    <template v-if="type === 'vertical'">
      <div class="yo-split-top" :style="yoLeftStyles" v-if="$scopedSlots.top">
        <slot name="top"></slot>
      </div>
      <div
        class="yo-split-vertical-line"
        ref="yoLineVertical"
        :style="yoLineStyles"
      >
        <!-- 自定义分割拖拽点 -->
        <slot name="trigger" v-if="$scopedSlots.trigger"></slot>
        <template v-else>
          <i
            class="yo-split-vertical-line-center"
            v-for="item in 8"
            :key="item"
          ></i>
        </template>
      </div>
      <div
        class="yo-split-bottom"
        :style="yoRightStyles"
        v-if="$scopedSlots.bottom"
      >
        <slot name="bottom"></slot>
      </div>
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
    return {
      splitValue: 0
    };
  },
  //存放 子组件
  // template: '',
  // 注意： 组件中的 所有 props 中的数据，都是通过 父组件传递给子组件的
  // props 中的数据，都是只读的，无法重新赋值
  props: {
    // 面板位置，可以是 0~1 代表百分比，或具体数值的像素，可用 v-model 双向绑定
    value: {
      type: [Number, String],
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
      let { border, type, $scopedSlots } = this;
      let leftSlotsStatus = false;
      let rightSlotsStatus = false;
      if (type === "horizontal") {
        let leftSlots = $scopedSlots.left();
        try {
          leftSlots &&
            leftSlots.forEach(item => {
              let { componentOptions } = item || {};
              let { tag } = componentOptions || {};
              if (tag == "y-split") {
                throw new Error("找到y-split子组件");
              }
            });
        } catch (error) {
          leftSlotsStatus = true;
        }
        let rightSlots = $scopedSlots.right();
        try {
          rightSlots &&
            rightSlots.forEach(item => {
              let { componentOptions } = item || {};
              let { tag } = componentOptions || {};
              if (tag == "y-split") {
                throw new Error("找到y-split子组件");
              }
            });
        } catch (error) {
          rightSlotsStatus = true;
        }
      }
      let bottomSlotsStatus = false;
      let topSlotsStatus = false;
      if (type === "vertical") {
        let topSlots = $scopedSlots.top();
        try {
          topSlots &&
            topSlots.forEach(item => {
              let { componentOptions } = item || {};
              let { tag } = componentOptions || {};
              if (tag == "y-split") {
                throw new Error("找到y-split子组件");
              }
            });
        } catch (error) {
          topSlotsStatus = true;
        }
        let bottomSlots = $scopedSlots.bottom();
        try {
          bottomSlots &&
            bottomSlots.forEach(item => {
              let { componentOptions } = item || {};
              let { tag } = componentOptions || {};
              if (tag == "y-split") {
                throw new Error("找到y-split子组件");
              }
            });
        } catch (error) {
          bottomSlotsStatus = true;
        }
      }
      return {
        [`${prefix}-border`]: !!border,
        [`${prefix}-bottom-no-padding`]:
          type === "vertical" && !!bottomSlotsStatus,
        [`${prefix}-top-no-padding`]: type === "vertical" && !!topSlotsStatus,
        [`${prefix}-left-no-padding`]:
          type === "horizontal" && !!leftSlotsStatus,
        [`${prefix}-right-no-padding`]:
          type === "horizontal" && !!rightSlotsStatus,
        [`${prefix}-${type}`]: !!type
      };
    },
    yoLineStyles() {
      let { splitValue, type } = this;
      let yoStyles = {};
      let pos = `${splitValue}%`;
      if (type === "vertical") {
        yoStyles["top"] = pos;
      } else {
        yoStyles["left"] = pos;
      }
      return yoStyles;
    },
    yoLeftStyles() {
      let { splitValue, type } = this;
      let pos = `${100 - splitValue}%`;
      let yoStyles = {};
      if (type === "vertical") {
        yoStyles["bottom"] = pos;
      } else {
        yoStyles["right"] = pos;
      }
      return yoStyles;
    },
    yoRightStyles() {
      let { splitValue, type } = this;
      let pos = `${splitValue}%`;
      let yoStyles = {};
      if (type === "vertical") {
        yoStyles["top"] = pos;
      } else {
        yoStyles["left"] = pos;
      }
      return yoStyles;
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
      // this._comId=this._uid;
      yoSplitRef.addEventListener("mousedown", this.mouseDownEvent);
      // console.log(this.$parent);
      this.$nextTick(() => {
        let { width, height } = yoSplitRef.getBoundingClientRect();

        let { value, type } = this;
        this._containerBox = { width, height };
        this.splitValue =
          (isNaN(value)
            ? type === "vertical"
              ? parseFloat(value) / height
              : parseFloat(value) / width
            : value) * 100;
      });
    },
    //拖拽开始事件
    mouseDownEvent(e) {
      let { target } = e;
      let { className } = target;
      let flag = false; //是否可以移动
      if (className.indexOf("yo-split-horizontal-line") > -1) {
        //左右移动
        flag = true;
      } else if (className.indexOf("yo-split-vertical-line") > -1) {
        //上下移动
        flag = true;
      }
      if (!flag) {
        return;
      }
      e.preventDefault();
      let startPos = getMousePosition(e);
      // let yoSplitRef = this.$refs.yoSplitRef;
      // console.log("mouseDownEvent=", className, yoSplitRef);
      document.addEventListener("mousemove", this.mouseMoveEvent);
      document.addEventListener("mouseup", this.mouseUpEvent);
      this._startPos = startPos;
      this.$emit("moveStart", e);
    },
    // 拖拽中事件
    mouseMoveEvent(e) {
      let pos = getMousePosition(e);
      // console.log("mouseMoveEvent=", this.$refs.yoSplitRef);
      this.moving(pos);
      this.$emit("moving", e);
    },
    moving(pos = {}) {
      let { type, _startPos = {}, splitValue, _containerBox, min, max } = this;
      let dis = {
        x: pos.x - _startPos.x,
        y: pos.y - _startPos.y
      };
      // let yoLineRef = null;
      let { width = 0, height = 0 } = _containerBox || {};
      // console.log("正在移动");
      if (type === "vertical") {
        // yoLineRef = this.$refs.yoLineVertical;
        splitValue += (dis.y * 100) / height;
        min = (parseFloat(min) * 100) / height;
        max = (parseFloat(max) * 100) / height;
        // console.log("垂直方向移动", dis.y);
      } else if (type === "horizontal") {
        // yoLineRef = this.$refs.yoLineHorizontal;
        splitValue += (dis.x * 100) / width;
        // console.log("水平方向移动", dis.x);
        min = (parseFloat(min) * 100) / width;
        max = (parseFloat(max) * 100) / width;
      }
      if (splitValue >= 100 - max) {
        splitValue = 100 - max;
      } else if (splitValue <= min) {
        splitValue = min;
      }
      this.splitValue = splitValue;
      this._startPos = pos;
    },
    //拖拽结束事件
    mouseUpEvent(e) {
      // let yoSplitRef = this.$refs.yoSplitRef;
      document.removeEventListener("mousemove", this.mouseMoveEvent);
      document.removeEventListener("mouseup", this.mouseUpEvent);
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
