<template>
  <div class="yo-list">
    <div class="yo-list-header" v-if="$slots.header || header">
      <slot name="header" v-if="$slots.header"> </slot>
    </div>
    <slot></slot>
    <div class="yo-list-footer" v-if="$slots.footer || footer">
      <slot name="footer" v-if="$slots.footer"> </slot>
    </div>
  </div>
</template>

<script>
const Props = {
  // 'xxl','xl', 'lg', 'md', 'sm', 'xs'
  // response:
  size: ["xxl", "xl", "l", "m", "s", "xs"]
};
export default {
  name: "yList",
  components: {},
  directives: {},
  props: {
    //是否显示边框
    border: {
      type: Boolean,
      default: false
    },
    // 边框圆角
    borderRadius: {
      type: [Number, String],
      default: 0
    },
    //水平布局
    horizontal: {
      type: Boolean,
      default: false
    },
    // 垂直布局
    vertical: {
      type: Boolean,
      default: true
    },
    // 列表头
    header: {
      type: String
    },
    //列表底
    footer: {
      type: String
    },
    size: {
      type: String,
      default: "",
      validator(value) {
        return Props.size.indexOf(value) > -1;
      }
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped></style>
