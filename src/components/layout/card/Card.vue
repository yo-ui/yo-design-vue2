/** * author: eric * create at: 2021-04-21 12:07:14 */
<script>
import Props from "../../../common/props";
const prefix = "yo-card";
const template = `
<div
      class="${prefix}-header"
      v-if="$scopedSlots.title || title || $scopedSlots.extra"
    >
      <h2 class="${prefix}-title">
        <span class="${prefix}-title-icon">
          <slot name="title" v-if="$scopedSlots.icon"></slot>
          <i :class="'yo-icon-' + icon + ' ' + icon" v-if="icon"></i>
        </span>
        <slot name="title" v-if="$scopedSlots.title"></slot>
        <template v-else>
          {{ title }}
        </template>
      </h2>
      <ul class="${prefix}-extra" v-if="$scopedSlots.extra">
        <slot name="extra"></slot>
      </ul>
    </div>
    <div class="${prefix}-poster" v-if="$scopedSlots.poster||poster">
        <slot name="poster" v-if="$scopedSlots.poster"></slot>
        <img :src="poster" :alt="posterTitle" :title="posterTitle" v-else/>
    </div>
    <div class="${prefix}-body" v-if="$slots.default" :style="yoBodyStyles">
      <slot></slot>
    </div>
    <ul class="${prefix}-action" v-if="$scopedSlots.action">
      <slot name="action"></slot>
    </ul>
`;
export default {
  name: "yCard",
  //存放 数据
  data: function() {
    return {};
  },
  //存放 子组件
  template: `
  <router-link :replace="replace" :to="to" class="${prefix} ${prefix}-link" :style="yoStyles"
    :target="target" :append="append" v-if="to&&$route" 
    :class="yoClasses" >
        ${template}
    </router-link>

    <a :href="to&&typeof(to)=='object'?to.name:to" class="${prefix} ${prefix}-link" :class="yoClasses" :style="yoStyles"
    :target="target" v-else-if="to">
        ${template}
    </a>
  <div class="${prefix}" :class="yoClasses" :style="yoStyles" v-else>
   ${template}
  </div>`,
  // 注意： 组件中的 所有 props 中的数据，都是通过 父组件传递给子组件的
  // props 中的数据，都是只读的，无法重新赋值
  props: {
    //是否鼠标悬停
    hover: {
      type: Boolean,
      default: false
    },
    // 边框圆角
    borderRadius: {
      type: [Number, String],
      default: 0
    },
    //是否显示边框
    border: {
      type: Boolean,
      default: true
    },
    //   卡片尺寸
    size: {
      type: String,
      default: "",
      validator(value) {
        return Props.size.indexOf(value) > -1;
      }
    },
    //卡片标题左边图标
    icon: {
      type: String,
      default: ""
    },
    //卡片封面
    poster: {
      type: String,
      default: ""
    },
    //卡片封面说明
    posterTitle: {
      type: String,
      default: ""
    },
    // 卡片标题
    title: {
      type: String,
      default: ""
    },
    // 卡片内部间距
    padding: {
      type: [String, Number],
      default: 24
    },
    //是否显示阴影
    shadow: {
      type: Boolean,
      default: false
    },
    //链接跳转  适用router-link参数（如果有使用Vue-Router）
    to: {
      type: [String, Object],
      default: ""
    },
    // 窗口打开目标     _blank, _parent,_self, _top,framename 与a标签类似
    target: String,
    //是否记录浏览记录
    replace: {
      type: Boolean,
      default: false
    },
    //是否在当前路径附加
    append: {
      type: Boolean,
      default: false
    }
  }, // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据

  //提供给子组件使用
  provide() {
    return {
      yList: this
    };
  },
  computed: {
    //列表尺寸
    listSize() {
      return this.size || this.$YOUI.size;
    },
    yoClasses() {
      let { listSize, vertical, border, split, hover, shadow } = this;
      return {
        [`${prefix}-${listSize}`]: !!listSize,
        [`${prefix}-vertical`]: !!vertical,
        [`${prefix}-split`]: !!split,
        [`${prefix}-border`]: !!border && !shadow,
        [`${prefix}-shadow`]: !!shadow,
        [`${prefix}-hover`]: !!hover && !shadow
      };
    },
    yoBodyStyles() {
      let { padding } = this;
      let yoStyles = {
        padding: `${isNaN(padding) ? padding : padding + "px"}`
      };
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
    init() {}
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
