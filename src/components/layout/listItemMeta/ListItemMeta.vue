<template>
  <li class="yo-list-item-meta" :class="yoClasses" :style="yoStyles">
    <slot></slot>
    <!-- 图像放置处 -->
    <div class="yo-list-item-meta-avatar" v-if="$scopeSlots.avatar || avatar">
      <slot name="avatar" v-if="$scopeSlots.avatar"></slot>
      <template v-if="avatar">
        <img :src="avatar" :alt="avatarTitle" />
      </template>
    </div>
    <!-- 标题放置处 -->
    <div class="yo-list-item-meta-title" v-if="$scopeSlots.title || title">
      <slot name="title"></slot>
    </div>
    <!-- 描述放置处 -->
    <div class="yo-list-item-meta-desc" v-if="$scopeSlots.desc || desc">
      <slot name="desc"></slot>
    </div>
  </li>
</template>

<script>
// const Props = {
//   // 'xxl','xl', 'lg', 'md', 'sm', 'xs'
//   // response:
//   size: ["xxl", "xl", "l", "m", "s", "xs"]
// };
import Props from "../../../common/props";
const prefix = "yo-list-item";
export default {
  name: "yListItemMeta",
  components: {},
  directives: {},
  props: {
    // 元数据图像链接
    avatar: {
      type: String,
      default: ""
    },
    //图像说明
    avatarTitle: {
      type: String,
      default: ""
    },
    // 标题
    title: {
      type: String,
      default: ""
    },
    // 描述
    desc: {
      type: String,
      default: ""
    },
    // // 垂直布局
    // vertical: {
    //   type: Boolean,
    //   default: true
    // },
    // // 列表头
    // header: {
    //   type: String
    // },
    // //列表底
    // footer: {
    //   type: String
    // },
    size: {
      type: String,
      default: "",
      validator(value) {
        return Props.size.indexOf(value) > -1;
      }
    }
  },
  inject: ["yList"],
  data() {
    return {};
  },
  computed: {
    // 列表项尺寸，可继承于父级List 以及配置项size
    itemSize() {
      return this.size || (this.yList && this.yList.size) || this.$YOUI.size;
    },
    yoClasses() {
      return {
        [`${prefix}-${this.itemSize}`]: !!this.itemSize
      };
    },
    yoStyles() {
      // let { borderRadius } = this;
      let yoStyles = {
        // "border-radius": `${
        //   isNaN(borderRadius) ? borderRadius : borderRadius + "px"
        // }`
      };
      return yoStyles;
    }
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped></style>
