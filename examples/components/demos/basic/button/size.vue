<template>
  <div>
    <y-button-group>
      <y-button :class="{ active: btnSize == 'l' }" @click="switchSize('l')">{{
        $lang("大型按钮")
      }}</y-button>
      <y-button :class="{ active: btnSize == '' }" @click="switchSize('')">{{
        $lang("默认按钮")
      }}</y-button>
      <y-button :class="{ active: btnSize == 'm' }" @click="switchSize('m')">{{
        $lang("中等按钮")
      }}</y-button>
      <y-button :class="{ active: btnSize == 's' }" @click="switchSize('s')">{{
        $lang("小型按钮")
      }}</y-button>
      <y-button :class="{ active: btnSize == 'xs' }" @click="switchSize('xs')">{{
        $lang("超小按钮")
      }}</y-button>
    </y-button-group>

    <y-button :size="btnSize">Default</y-button>
    <y-button :size="btnSize" type="primary">Primary</y-button>
    <y-button :size="btnSize" type="dashed">Dashed</y-button>
    <y-button :size="btnSize" type="text">Text</y-button>
    <y-button :size="btnSize" type="info">Info</y-button>
    <y-button :size="btnSize" type="success">Success</y-button>
    <y-button :size="btnSize" type="warning">Warning</y-button>
    <y-button :size="btnSize" type="error">Error</y-button>
    <div class="line"></div>
    <y-button :size="btnSize" plain>Default</y-button>
    <y-button :size="btnSize" plain type="primary">Primary</y-button>
    <y-button :size="btnSize" plain type="dashed">Dashed</y-button>
    <y-button :size="btnSize" plain type="text">Text</y-button>
    <y-button :size="btnSize" plain type="info">Info</y-button>
    <y-button :size="btnSize" plain type="success">Success</y-button>
    <y-button :size="btnSize" plain type="warning">Warning</y-button>
    <y-button :size="btnSize" plain type="error">Error</y-button>
    <div class="line"></div>
    <y-button :size="btnSize" round>Default</y-button>
    <y-button :size="btnSize" round type="primary">Primary</y-button>
    <y-button :size="btnSize" round type="dashed">Dashed</y-button>
    <y-button :size="btnSize" round type="text">Text</y-button>
    <y-button :size="btnSize" round type="info">Info</y-button>
    <y-button :size="btnSize" round type="success">Success</y-button>
    <y-button :size="btnSize" round type="warning">Warning</y-button>
    <y-button :size="btnSize" round type="error">Error</y-button>
    <div class="line"></div>
    <y-button :size="btnSize" square>Default</y-button>
    <y-button :size="btnSize" square type="primary">Primary</y-button>
    <y-button :size="btnSize" square type="dashed">Dashed</y-button>
    <y-button :size="btnSize" square type="text">Text</y-button>
    <y-button :size="btnSize" square type="info">Info</y-button>
    <y-button :size="btnSize" square type="success">Success</y-button>
    <y-button :size="btnSize" square type="warning">Warning</y-button>
    <y-button :size="btnSize" square type="error">Error</y-button>
    <div class="line"></div>
    <y-button :size="btnSize" circle icon="search"></y-button>
    <y-button :size="btnSize" circle type="primary" icon="edit"></y-button>
    <y-button :size="btnSize" circle type="dashed" icon="remove"></y-button>
    <y-button :size="btnSize" circle type="info" icon="info"></y-button>
    <y-button :size="btnSize" circle type="success" icon="success"></y-button>
    <y-button :size="btnSize" circle type="warning" icon="warn"></y-button>
    <y-button :size="btnSize" circle type="error" icon="network-error"></y-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        btnSize: "",
      };
    },
    methods: {
      switchSize(size) {
        this.btnSize = size;
      },
    },
  };
</script>

<style lang="less" scoped>
  @import (reference) "../../../../src/assets/less/common.less";
  .yo-btn-group {
    .db;
    .mb(10);
    .tl;
    .yo-btn {
      &.active {
        .bc(@yo-primary);
        .c(@white);
      }
    }
  }
  .line {
    .db;
    .mb(10);
  }
</style>
