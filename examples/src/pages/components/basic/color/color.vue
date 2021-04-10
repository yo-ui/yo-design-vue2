<template>
  <div class="y-color-page">
    <yo-anchor :text="$lang('颜色')" :size="30"></yo-anchor>
    <p>
      {{
        $lang(
          "推荐使用以下调色板的颜色作为设计和开发规范，以保证页面和组件之间的视觉一致。"
        )
      }}
    </p>
    <!-- <yo-anchor :text="$lang('字体代码')" :size="24"></yo-anchor>
    <yo-code type="css" src="/components/demos/basic/font/use.css"></yo-code> -->
    <yo-anchor :text="$lang('颜色使用')" :size="24"></yo-anchor>

    <yo-example demo="basic/color/primary">
      <template v-slot:desc>
        <yo-desc :title="$lang('主色')">
          {{
            $lang(
              "使用较为安全的青色作为主色调，其中 Light Primary 常用于 hover，Dark Primary 常用于 active。"
            )
          }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="basic/color/assist">
      <template v-slot:desc>
        <yo-desc :title="$lang('辅助色')">
          {{
            $lang(
              "辅助色是除了主色外的场景色，需要在不同的场景中使用,具有代表性的颜色，常用于信息提示，比如成功、警告和失败。"
            )
          }}
        </yo-desc>
      </template>
    </yo-example>
    <yo-example demo="basic/color/neutral">
      <template v-slot:desc>
        <yo-desc :title="$lang('中性色')">
          {{
            $lang(
              "中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。"
            )
          }}
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
  .y-color-page {
    /deep/ .demo {
      .df;
      flex-wrap: wrap;
      .p(15px 8px);
      .ml(-8);
      .mr(-8);
      &.multi {
        .color-box {
          .br-bottom(0);
        }
      }
      .box {
        .flex(1);
        flex-basis: 25%;
        max-width: 25%;
        .mb(15);
      }
      .sub-box {
        .df;
        .color-box {
          .flex(1);
          .br(0);
          .ml(0);
          .mr(0);
        }
      }
      .color-box {
        .c(@white);
        .p(20px);
        .br(5px);
        .ml(8);
        .mr(8);
        .text {
          .mt(5);
        }
      }
    }
  }
</style>
