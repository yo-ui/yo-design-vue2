/** * author: eric * create at: 2021-04-22 16:17:20 */
<template>
  <div class="yo-collapse" :class="yoClasses" :style="yoStyles">
    <slot></slot>
  </div>
</template>
<script>
import Props from "../../../common/props";
const prefix = "yo-collapse";
export default {
  name: "yCollapse",
  //存放 数据
  data() {
    let { value } = this;
    return {
      //存放选中的name
      nameList: Array.isArray(value) ? value : [value]
    };
  },
  //存放 子组件
  // template: '',
  // 注意： 组件中的 所有 props 中的数据，都是通过 父组件传递给子组件的
  // props 中的数据，都是只读的，无法重新赋值
  props: {
    // 前激活的面板的 name，可以使用 v-model 双向绑定
    value: {
      type: [Array],
      default() {
        return [];
      }
    },
    //   卡片尺寸
    size: {
      type: String,
      default: "",
      validator(value) {
        return Props.size.indexOf(value) > -1;
      }
    },
    // 是否开启手风琴模式，开启后每次至多展开一个面板
    accordion: {
      type: Boolean,
      default: false
    },
    // 是否开启简洁模式
    simple: {
      type: Boolean,
      default: false
    },
    // 边框圆角
    borderRadius: {
      type: [Number, String],
      default: 0
    },
    // 带边框风格的折叠面板
    border: {
      type: Boolean,
      default: true
    },
    // 是否隐藏图标
    iconHide: {
      type: Boolean,
      default: false
    },
    // 是否显示分割线
    split: {
      type: Boolean,
      default: true
    },
    // 图标大小
    iconSize: {
      type: [Number, String],
      default: ""
    },
    // 自定义切换图标
    icon: {
      type: String,
      default: "right"
    },
    // 设置图标位置： left, right
    iconPosition: {
      type: String,
      default: "left"
    },
    // 面板内容区最大高度
    maxHeight: {
      type: [Number, String],
      default: 500
    },
    // 面板内容展开的动画时长  单位为ms
    animationTime: {
      type: [Number, String],
      default: 200
    },
    // 销毁折叠隐藏的面板
    destroyInactivePanel: {
      type: Boolean,
      default: false
    }
  }, // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
  computed: {
    yoClasses() {
      let { border, simple } = this;
      return {
        // [`${prefix}-${collapseSize}`]: !!collapseSize,
        [`${prefix}-simple`]: !!simple,
        [`${prefix}-border`]: !!border
        // [`${prefix}-shadow`]: !!shadow,
        // [`${prefix}-hover`]: !!hover && !shadow
      };
    },
    // yoBodyStyles() {
    //   let { padding } = this;
    //   let yoStyles = {
    //     padding: `${isNaN(padding) ? padding : padding + "px"}`
    //   };
    //   return yoStyles;
    // },
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

  provide() {
    return {
      yCollapse: this
    };
  },
  //存放 方法
  methods: {
    init() {},
    //返回面板所有的name
    changeEvent(name) {
      let { nameList, accordion } = this;
      console.log(nameList);
      let index = nameList.indexOf(name);
      if (!accordion) {
        //手风琴则只有一个选中
        if (index > -1) {
          nameList.splice(index, 1);
        } else {
          nameList.push(name);
        }
      } else {
        if (index > -1) {
          nameList.splice(0);
        } else {
          nameList.splice(0, nameList.length, name);
        }
      }
      this.$emit("input", nameList);
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
