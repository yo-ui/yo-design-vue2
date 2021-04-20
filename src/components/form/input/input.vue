/** * author: eric * create at: 2019-12-30 23:48:26 */
<script>
import Props from "../../../common/props";
const prefix = "yo-input";
const t_prefix = "yo-textarea";
let oldType = "";
// const Props = {
//   // 'xxl','xl', 'lg', 'md', 'sm', 'xs'
//   size: ["xxxl", "xxl", "xl", "l", "m", "s", "xs"]
// };
const template = `
        <span class="${prefix}-pre" v-if="$slots.prepend">
            <slot name="prepend"></slot>
        </span>
        <span ref="pre_box" class="yo-icon-pre-box">
            <span class="yo-icon-inner" v-if="$slots.prefix">
                <slot name="prefix"></slot>
            </span>
            <template v-else>
              <i class="yo-icon-inner" :class="'yo-icon-'+icon" v-if="icon"></i>
            </template>
        </span>
        <input
        class="${prefix}-inner"
        v-bind="$attrs"
        :disabled="inputDisabled"
        :readonly="readonly"
        ref="input"
        :type="nativeInputType"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :spellcheck="spellcheck"
        :autofocus="autoFocus"
        :value="dataValue"
        @compositionstart="onComposition"
        @compositionupdate="onComposition"
        @compositionend="onComposition"
        @keyup.enter="onEnter"
        @keyup="onKeyup"
        @keypress="onKeypress"
        @keydown="onKeydown" 
        @focus="onFocus" 
        @blur="onBlur"
        @input="onInput"
        />
        <span ref="post_box" class="yo-icon-post-box">
          <i class="yo-icon-inner yo-icon-close-closeable yo-icon-close" v-if="clearable&&!!dataValue" @click="onClear"></i>
          <i class="yo-icon-inner" :class="'yo-icon-'+loadingName+' '+loadingName" v-if="loading&&!enterButton"></i>
          <template v-else>
            <i class="yo-icon-inner yo-icon-search" v-if="search&&!enterButton"></i>
          </template>
          <span class="yo-icon-inner" v-if="$slots.suffix">
            <slot name="suffix"></slot>
          </span>
          <template v-else>
            <i class="yo-icon-inner" :class="'yo-icon-'+rightIcon" v-if="rightIcon"></i>
          </template>
          <i class="yo-icon-inner" :class="showPassClasses" @click="showPass=!showPass" v-if="showPassword"></i>
          <span class="${prefix}-word-count yo-icon-inner" v-if="showWordLimit">{{ textLen }}/{{ upperLimit }}</span>
          <span v-if="search&&enterButton" class="yo-search-box" @click="onSearch">
            <i class="yo-icon-inner" :class="'yo-icon-'+loadingName+' '+loadingName" v-if="loading"></i>
            <template v-else>
              <i class="yo-icon-search" v-if="!enterButtonValue"></i>
              <template v-else>
                  {{enterButtonValue}}
              </template>
            </template>
          </span>
        </span>
        <span class="${prefix}-append" v-if="$slots.append">
            <slot name="append"></slot>
        </span>
        `;
export default {
  name: "YInput",
  template: `
        <div :class="yoClasses" :style="yoStyles">
            <template v-if="type!='textarea'">
                ${template}
            </template>
            <template v-else>
                <textarea class="yo-textarea-inner"
                v-bind="$attrs"
                :disabled="inputDisabled"
                :readonly="readonly"                
                ref="textarea"
                :placeholder="placeholder"
                :autocomplete="autocomplete"
                :spellcheck="spellcheck"
                :autofocus="autoFocus"
                :style="textareaStyles"
                :value="dataValue"
                @compositionstart="onComposition"
                @compositionupdate="onComposition"
                @compositionend="onComposition"
                @keyup.enter="onEnter"
                @keyup="onKeyup"
                @keypress="onKeypress"
                @keydown="onKeydown" 
                @focus="onFocus"
                @blur="onBlur"
                @input="onInput"
                ></textarea>
                <i class="yo-icon-inner yo-icon-close-closeable yo-icon-close" v-if="clearable&&!!dataValue" @click="onClear"></i>
                <span class="${prefix}-word-count" v-if="showWordLimit">{{ textLen }}/{{ upperLimit }}</span>
            </template>
        </div>
    `,
  inheritAttrs: false,
  //存放 数据
  data() {
    let dataValue = this.value || "";
    // console.log(dataValue, "data()");
    return {
      showPass: false, //是否显示密码
      dataValue
    };
  },
  inject: {
    yForm: {
      default: ""
    },
    yFormItem: {
      default: ""
    }
  },
  //存放 子组件
  // template: '',
  // 注意： 组件中的 所有 props 中的数据，都是通过 父组件传递给子组件的
  // props 中的数据，都是只读的，无法重新赋值
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    placeholder: { type: String, default: "" },
    maxlength: { type: [String, Number] },
    // autoSize: {
    //   type: [Boolean, Object],
    //   default: false
    // },
    type: {
      type: String,
      default: "text" //组件类型  text textarea  默认为text
    },
    // 自动获取焦点
    autoFocus: {
      type: Boolean,
      default: false
    },
    // 是否显示边框
    border: {
      type: Boolean,
      default: false
    },
    // 拼写检查
    spellcheck: {
      type: Boolean,
      default: false
    },
    // 自动完成
    autocomplete: {
      type: String,
      default: "off"
    },
    //是否显示加载中
    loading: {
      type: Boolean,
      default: false
    },
    //loading 样式
    loadingName: {
      type: String,
      default: "loading"
    },
    //是否开启search
    search: {
      type: Boolean,
      default: false
    },
    // 回车按钮输入文字
    enterButton: {
      type: [Boolean, String],
      default: false
    },
    //是否只输入数字
    number: {
      type: Boolean,
      default: false
    },
    //字数统计是否显示在外面
    outer: {
      type: Boolean,
      default: false
    },
    //字数统计是否显示在里面
    inner: {
      type: Boolean,
      default: true
    },
    //是否显示密码切换按钮
    showPassword: {
      type: Boolean,
      default: false
    },
    //是否显示清除图标按钮
    clearable: {
      type: Boolean,
      default: false
    },
    // 左图标
    icon: String,
    // 右图标
    rightIcon: String,
    // 可用状态
    disabled: {
      type: Boolean,
      default: false
    },
    // 可读状态
    readonly: {
      type: Boolean,
      default: false
    },
    // 是否显示字数统计
    showWordLimit: {
      type: Boolean,
      default: false
    },
    // 自适应内容高度，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }
    autoSize: {
      type: [Boolean, Object],
      default: false
    },
    // 控件大小
    size: {
      type: String,
      validator(value) {
        return Props.size.indexOf(value) != -1;
      }
    }
  }, // 把父组件传递过来的 parent msg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
  computed: {
    inputDisabled() {
      return (
        this.disabled ||
        (this.yFormItem || {}).disabled ||
        (this.yForm || {}).disabled
      );
    },
    nativeInputType() {
      let { type, showPassword, showPass } = this;
      if (!oldType) {
        oldType = type;
      }
      if (oldType == "password") {
        if (showPassword) {
          if (showPass) {
            type = "text";
          } else {
            type = "password";
          }
        }
      }
      return type;
    },
    enterButtonValue() {
      return typeof this.enterButton === "string" ? this.enterButton : "";
    },
    //   nativeInputValue() {
    //     console.error("nativeInputValue()", this.value);
    //     return this.value === null || this.value === undefined ? "" : String(this.value);
    //   },
    yoStyles() {
      let yoStyles = {
        "background-color": `${this.color}`,
        "border-color": `${this.color}`,
        color: `${this.textColor}`
      };
      // console.log(yoStyles)
      return this.type == "textarea" ? {} : yoStyles;
    },
    textareaStyles() {
      let textareaStyles = {
        // "background-color": `${this.color}`,
        // "border-color": `${this.color}`,
        // color: `${this.textColor}`,
      };
      return textareaStyles;
    },
    inputSize() {
      return this.size || (this.yForm || {}).size || this.$YOUI.size;
    },
    showPassClasses() {
      return {
        [`yo-icon-eye`]: !!this.showPass,
        [`yo-icon-eye-close`]: !this.showPass
      };
    },
    yoClasses() {
      return this.type == "textarea"
        ? {
            [`${t_prefix}`]: true,
            [`${t_prefix}-outer`]: !!this.outer,
            [`${t_prefix}-circle`]: !!this.circle,
            [`${t_prefix}-round`]: !!this.round,
            [`${t_prefix}-square`]: !!this.square,
            [`${t_prefix}-disabled`]: !!this.disabled
          }
        : {
            [`${prefix}`]: true,
            [`${prefix}-outer`]: !!this.outer,
            [`${prefix}-circle`]: !!this.circle,
            [`${prefix}-round`]: !!this.round,
            [`${prefix}-square`]: !!this.square,
            [`${prefix}-disabled`]: !!this.disabled,
            [`${prefix}-${this.inputSize}`]: !!this.inputSize,
            [`${prefix}-transparent`]: !!this.transparent,
            [`${prefix}-no-border`]: !this.border
          };
    },
    textLen() {
      return String(this.value || "").length;
    },
    upperLimit() {
      let maxlength = this.$attrs.maxlength || this.maxlength;
      if (!maxlength) {
        maxlength = this.type == "textarea" ? 300 : 20; //默认为300个字符限制
        if (this.getInput()) {
          // this.maxlength = maxlength;
          this.getInput().setAttribute("maxlength", maxlength);
        }
      }
      return maxlength;
    }
  },
  updated() {
    // this.updateComponent();
  },
  //存放 方法
  methods: {
    updateComponent() {
      this.$nextTick(() => {
        if (this.$refs.input) {
          let left = this.$refs.pre_box.offsetWidth,
            right = this.$refs.post_box.offsetWidth;
          console.log(left, right, "updateComponent");
          this.$refs.input.style.paddingLeft = `${
            left > 0 ? left : left + 5
          }px`;
          this.$refs.input.style.paddingRight = `${
            right > 0 ? right : right + 5
          }px`;
        }
      });
    },
    init() {
      // this.setNativeInputValue();
      this.updateComponent();
      this.resizeTextarea();
      // console.log('----',this.$attrs,this.type)
    },
    onEnter(e) {
      this.$emit("enter", e);
      if (this.search) {
        this.onSearch(e);
      }
    },
    //选中input中的文字
    onSelect(e) {
      this.getInput().select();
      if (e) {
        this.$emit("select", e);
      }
    },
    // 失去焦点
    onBlur(e) {
      this.getInput().blur();
      if (e) {
        this.$emit("focus", e);
      }
    },
    // 获取焦点
    onFocus(e) {
      this.getInput().focus();
      if (e) {
        this.$emit("focus", e);
      }
    },
    // 按钮弹起
    onKeyup(e) {
      this.$emit("keyup", e);
    },
    onKeydown(e) {
      // if (e.keyCode === 13) {
      //   this.$emit("pressEnter", e);
      // }
      this.$emit("keydown", e);
    },
    onKeypress(e) {
      this.$emit("keypress", e);
    },
    // 点击右侧图标按钮事件
    onIconClick(e) {
      this.$emit("click", e);
    },
    onClear() {
      const e = { target: { value: "" } };
      this.$emit("input", "");
      this.setNativeInputValue("");
      this.$emit("change", e);
      this.$emit("clear");
    },
    onSearch() {
      console.log("搜索事件");
      this.onFocus();
      this.$emit("search", this.dataValue);
    },
    onComposition(event) {
      if (event.type === "compositionstart") {
        this.isComposing = true;
      }
      if (event.type === "compositionend") {
        this.isComposing = false;
        this.onInput(event);
      }
    },
    //输入事件
    onInput(e) {
      // 在输入后才触发input
      if (this.isComposing) {
        return;
      }

      let value = e.target.value;
      if (this.number && value !== "") {
        value = Number.isNaN(Number(value)) ? value : Number(value);
      }
      console.log("value====", value);
      this.$emit("input", value);
      this.setNativeInputValue(value);
      this.$emit("change", e);
    },
    // 输入改变事件
    onChange(e) {
      this.$emit("change", e);
    },
    getInput() {
      return this.$refs.input || this.$refs.textarea;
    },
    setNativeInputValue(value) {
      if (value === this.dataValue) return;
      this.$nextTick(() => {
        this.resizeTextarea();
      });
      this.dataValue = value;
    },
    resizeTextarea() {
      const { autoSize } = this;
      if (!autoSize || this.type !== "textarea") {
        return false;
      }

      const { minRows, maxRows } = autoSize || {};
      this.textareaStyles = this.calcTextareaHeight(
        this.getInput(),
        minRows,
        maxRows
      );
    },
    calcTextareaHeight() {}
  },
  watch: {
    value(val) {
      this.setNativeInputValue(val);
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
  //销毁时期
  beforeDestroy() {},
  destroyed() {}
};
</script>
