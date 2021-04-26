<template>
  <div>
    <p>基本样式</p>
    <y-button-group>
      <y-button type="primary">{{ $lang("上一页") }}</y-button>
      <y-button type="primary">{{ $lang("下一页") }}</y-button>
    </y-button-group>
    <y-button-group>
      <y-button type="primary" icon="left">{{ $lang("上一页") }}</y-button>
      <y-button type="primary" right-icon="right">{{
        $lang("下一页")
      }}</y-button>
    </y-button-group>
    <y-button-group round>
      <y-button type="primary" icon="left">{{ $lang("上一页") }}</y-button>
      <y-button type="primary" right-icon="right">{{
        $lang("下一页")
      }}</y-button>
    </y-button-group>
    <y-button-group size="l">
      <y-button type="primary" icon="add"></y-button>
      <y-button type="primary" icon="edit"></y-button>
      <y-button type="primary" icon="remove"></y-button>
      <y-button type="primary" icon="refresh"></y-button>
    </y-button-group>
    <p>圆角(round)</p>
    <y-button-group round size="l">
      <y-button type="primary" icon="add"></y-button>
      <y-button type="primary" icon="edit"></y-button>
      <y-button type="primary" icon="remove"></y-button>
      <y-button type="primary" icon="refresh"></y-button>
    </y-button-group>
    <y-button-group round size="l">
      <y-button type="info" icon="add"></y-button>
      <y-button type="info" icon="edit"></y-button>
      <y-button type="info" icon="remove"></y-button>
      <y-button type="info" icon="refresh"></y-button>
    </y-button-group>
    <y-button-group round size="l">
      <y-button type="success" icon="add"></y-button>
      <y-button type="success" icon="edit"></y-button>
      <y-button type="success" icon="remove"></y-button>
      <y-button type="success" icon="refresh"></y-button>
    </y-button-group>
    <y-button-group round size="l">
      <y-button type="error" icon="add"></y-button>
      <y-button type="error" icon="edit"></y-button>
      <y-button type="error" icon="remove"></y-button>
      <y-button type="error" icon="refresh"></y-button>
    </y-button-group>
    <p>警告色-翻转(reverse)</p>
    <y-button-group size="l">
      <y-button type="warning" icon="add"></y-button>
      <y-button type="warning" icon="edit"></y-button>
      <y-button type="warning" icon="remove"></y-button>
      <y-button type="warning" icon="refresh"></y-button>
    </y-button-group>
    <y-button-group reverse size="l">
      <y-button type="warning" icon="add"></y-button>
      <y-button type="warning" icon="edit"></y-button>
      <y-button type="warning" icon="remove"></y-button>
      <y-button type="warning" icon="refresh"></y-button>
    </y-button-group>
    <y-button-group size="xs">
      <y-button icon="add"></y-button>
      <y-button icon="edit"></y-button>
      <y-button icon="remove"></y-button>
      <y-button icon="refresh"></y-button>
    </y-button-group>
    <p>垂直排列</p>
    <y-button-group vertical>
      <y-button type="primary" icon="add"></y-button>
      <y-button type="primary" icon="edit"></y-button>
      <y-button type="primary" icon="remove"></y-button>
      <y-button type="primary" icon="refresh"></y-button>
    </y-button-group>
    <y-button-group vertical>
      <y-button icon="add"></y-button>
      <y-button icon="edit"></y-button>
      <y-button icon="remove"></y-button>
      <y-button icon="refresh"></y-button>
    </y-button-group>
    <y-button-group round vertical>
      <y-button icon="add"></y-button>
      <y-button icon="edit"></y-button>
      <y-button icon="remove"></y-button>
      <y-button icon="refresh"></y-button>
    </y-button-group>
    <y-button-group reverse round vertical>
      <y-button icon="add"></y-button>
      <y-button icon="edit"></y-button>
      <y-button icon="remove"></y-button>
      <y-button icon="refresh"></y-button>
    </y-button-group>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$emit("loaded");
  }
};
</script>

<style lang="less" scoped>
.yo-btn-group {
  margin-bottom: 20px;
  margin-right: 20px;
}
</style>
