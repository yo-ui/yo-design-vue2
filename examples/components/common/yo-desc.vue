<template>
  <div class="yo-desc-com">
    <h2 class="yo-desc-title" v-if="$slots.title || title">
      <slot name="title" v-if="$slots.title"></slot>
      <template v-else>
        {{ title }}
      </template>
      <a :id="`${title}`" :href="`#${title}`">#</a>
    </h2>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    props: {
      title: {
        type: String,
      },
    },
  };
</script>

<style lang="less" scoped>
  @import (reference) "../../src/assets/less/common.less";
  .yo-desc-com {
    .bort(1px solid @yo-border);
    .posr;
    .p(20px 20px 20px 40px);
    .yo-desc-title {
      .posa;
      z-index: 1;
      top: -10px;
      left: 25px;
      // .mt(-14);
      .fz(14);
      .c(@gray6);
      .ml(0);
      .bc(@white);
      .p(0 25px 0 15px);
      // .fl;
      &:hover {
        a {
          opacity: 1;
        }
      }
      a {
        .c(@yo-theme);
        opacity: 0;
      }
    }
    p {
      .lh(20);
      .p(5px);
    }
  }
</style>
