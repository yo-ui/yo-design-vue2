<template>
  <div class="demo">
    通过设置type为primary、dashed、text、info、success、warning、error创建不同样式的按钮，不设置为默认样式。
    <p>{{ $lang("常用的操作按钮。") }}</p>
    <y-button>Default</y-button>
    <y-button type="primary">Primary</y-button>
    <y-button type="dashed">Dashed</y-button>
    <y-button type="text">Text</y-button>
    <y-button type="info">Info</y-button>
    <y-button type="success">Success</y-button>
    <y-button type="warning">Warning</y-button>
    <y-button type="error">Error</y-button>

    <p>{{ $lang("朴素简单按钮") }}</p>
    <y-button plain>Default</y-button>
    <y-button plain type="primary">Primary</y-button>
    <y-button plain type="dashed">Dashed</y-button>
    <y-button plain type="text">Text</y-button>
    <y-button plain type="info">Info</y-button>
    <y-button plain type="success">Success</y-button>
    <y-button plain type="warning">Warning</y-button>
    <y-button plain type="error">Error</y-button>
    <p>{{ $lang("圆角按钮") }}</p>
    <y-button round>Default</y-button>
    <y-button round type="primary">Primary</y-button>
    <y-button round type="dashed">Dashed</y-button>
    <y-button round type="text">Text</y-button>
    <y-button round type="info">Info</y-button>
    <y-button round type="success">Success</y-button>
    <y-button round type="warning">Warning</y-button>
    <y-button round type="error">Error</y-button>
    <p>{{ $lang("方形按钮") }}</p>
    <y-button square>Default</y-button>
    <y-button square type="primary">Primary</y-button>
    <y-button square type="dashed">Dashed</y-button>
    <y-button square type="text">Text</y-button>
    <y-button square type="info">Info</y-button>
    <y-button square type="success">Success</y-button>
    <y-button square type="warning">Warning</y-button>
    <y-button square type="error">Error</y-button>
    <p>{{ $lang("圆形按钮") }}</p>
    <y-button circle icon="search"></y-button>
    <y-button circle type="primary" icon="edit"></y-button>
    <y-button circle type="dashed" icon="remove"></y-button>
    <y-button circle type="info" icon="info"></y-button>
    <y-button circle type="success" icon="success"></y-button>
    <y-button circle type="warning" icon="warn"></y-button>
    <y-button circle type="error" icon="network-error"></y-button>
    <p>{{ $lang("透明按钮") }}</p>
    <section style="background: #eee; padding: 10px">
      <y-button transparent>{{ $lang("透明按钮") }}</y-button>
    </section>
    <p>{{ $lang("无边框按钮") }}</p>
    <y-button no-border>{{ $lang("无边框按钮") }}</y-button>
    <y-button no-border plain>{{ $lang("无边框按钮") }}</y-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    mounted() {},
  };
</script>
<style lang="less">
  .demo {
    .yo-btn {
      margin-bottom: 10px;
    }
  }
</style>
