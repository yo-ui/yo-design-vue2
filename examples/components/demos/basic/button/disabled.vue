<template>
  <div>
    <y-button>{{ $lang("默认按钮") }}</y-button>
    <y-button disabled>{{ $lang("默认按钮（不可用状态）") }}</y-button>
    <br />
    <y-button type="primary">{{ $lang("主题色按钮") }}</y-button>
    <y-button type="primary" disabled>{{ $lang("主题色按钮（不可用状态）") }}</y-button>
    <br />
    <y-button type="dashed">{{ $lang("虚线框按钮") }}</y-button>
    <y-button type="dashed" disabled>{{ $lang("虚线框按钮（不可用状态）") }}</y-button>
    <br />
    <y-button type="info">{{ $lang("信息按钮") }}</y-button>
    <y-button type="info" disabled>{{ $lang("信息按钮（不可用状态）") }}</y-button>
    <br />
    <y-button type="success">{{ $lang("成功按钮") }}</y-button>
    <y-button type="success" disabled>{{ $lang("成功按钮（不可用状态）") }}</y-button>
    <br />
    <y-button type="warning">{{ $lang("警告按钮") }}</y-button>
    <y-button type="warning" disabled>{{ $lang("警告按钮（不可用状态）") }}</y-button>
    <br />
    <y-button type="error">{{ $lang("错误按钮") }}</y-button>
    <y-button type="error" disabled>{{ $lang("错误按钮（不可用状态）") }}</y-button>
    <br />
    <y-button type="text">{{ $lang("文本按钮") }}</y-button>
    <y-button type="text" disabled>{{ $lang("文本按钮（不可用状态）") }}</y-button>
    <div class="bg-gray pb10">
      <y-button ghost>{{ $lang("文本按钮") }}</y-button>
      <y-button ghost disabled>{{ $lang("文本按钮（不可用状态）") }}</y-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    mounted() {
      this.$emit("loaded");
    },
  };
</script>

<style lang="less" scoped>
  .yo-btn {
    margin-bottom: 10px;
  }
</style>
