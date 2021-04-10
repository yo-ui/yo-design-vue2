<template>
  <div class="yo-text-page">
    <yo-anchor :text="$lang('字体')" :size="30"></yo-anchor>
    <p>
      {{ $lang("我们对字体进行统一规范，力求在各个操作系统下都有最佳展示效果。") }}
    </p>
    <yo-anchor :text="$lang('字体代码')" :size="24"></yo-anchor>
    <yo-code type="css" src="/components/demos/basic/font/use.css"></yo-code>
    <yo-anchor :text="$lang('字体使用规范')" :size="24"></yo-anchor>

    <yo-example demo="basic/font/font">
      <template v-slot:desc>
        <yo-desc :title="$lang('字体风格')">
          {{ $lang("提供不同类型的字体展示") }}
        </yo-desc>
      </template>
    </yo-example>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="less" scoped>
  @import (reference) "../../../../assets/less/common.less";
  .yo-text-page {
    .demo {
      .yo-btn {
        .mb(10);
      }
    }
    /deep/ table {
      td {
        &:nth-child(3) {
          .c(@yo-text);
        }
        span {
          vertical-align: middle;
          .dib;
          .p(10px);
          .mr(10);
        }
      }
    }
  }
</style>
