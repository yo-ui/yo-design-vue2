<template>
  <li class="yo-list-item" :class="yoClasses" :style="yoStyles">
    <!-- 扩展内容放置处 -->
    <div class="yo-list-item-extra" v-if="$scopedSlots.extra && !!itemReverse">
      <slot name="extra"></slot>
    </div>
    <template v-if="vertical">
      <div class="yo-list-item-content" v-if="$scopedSlots.extra">
        <slot></slot>
        <!-- 操作按钮放置处 -->
        <ul class="yo-list-item-action" v-if="$scopedSlots.action">
          <slot name="action"></slot>
        </ul>
      </div>
    </template>
    <template v-else>
      <slot></slot>
      <!-- 操作按钮放置处 -->
      <ul class="yo-list-item-action" v-if="$scopedSlots.action">
        <slot name="action"></slot>
      </ul>
    </template>
    <!-- 扩展内容放置处 -->
    <div class="yo-list-item-extra" v-if="$scopedSlots.extra && !itemReverse">
      <slot name="extra"></slot>
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
  name: "yListItem",
  components: {},
  directives: {},
  props: {
    reverse: {
      type: Boolean,
      default: false
    },
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
    //是否垂直排列
    vertical() {
      return !!(this.yList && this.yList.vertical);
    },
    //是否反序
    itemReverse() {
      return this.reverse || (this.yList && this.yList.reverse);
    },
    yoClasses() {
      let { itemSize, itemReverse } = this;
      return {
        [`${prefix}-${this.itemSize}`]: !!itemSize,
        [`${prefix}-reverse`]: !!itemReverse
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
