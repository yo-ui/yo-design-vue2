<template>
  <div class="yo-card-meta" :class="yoClasses" :style="yoStyles">
    <!-- 图像放置处 -->
    <div class="yo-card-meta-avatar" v-if="$scopedSlots.avatar || avatar">
      <slot name="avatar" v-if="$scopedSlots.avatar"></slot>
      <template v-else-if="avatar">
        <img :src="avatar" :alt="avatarTitle" :title="avatarTitle" />
      </template>
    </div>
    <!-- 标题放置处 -->
    <div class="yo-card-meta-content">
      <h3 class="yo-card-meta-title" v-if="$scopedSlots.title || title">
        <slot name="title" v-if="$scopedSlots.title"></slot>
        <template v-else-if="title">
          {{ title }}
        </template>
      </h3>
      <!-- 描述放置处 -->
      <div class="yo-card-meta-desc" v-if="$scopedSlots.desc || desc">
        <slot name="desc" v-if="$scopedSlots.desc"></slot>
        <slot name="desc" v-else-if="$slots.default"></slot>
        <template v-else-if="desc">
          {{ desc }}
        </template>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Props from "../../../common/props";
// const prefix = "yo-card-meta";
export default {
  name: "yCardMeta",
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
  //   inject: ["yList"],
  data() {
    return {};
  },
  computed: {
    // 列表项尺寸，可继承于父级List 以及配置项size
    // itemSize() {
    //   return this.size || (this.yList && this.yList.size) || this.$YOUI.size;
    // },
    yoClasses() {
      return {
        // [`${prefix}-${this.itemSize}`]: !!this.itemSize
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
