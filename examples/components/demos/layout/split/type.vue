<template>
  <div>
    <y-split
      border
      borderRadius="10"
      v-model="splitValue"
      type="vertical"
      style="height:400px"
    >
      <template #top>
        上边内容
      </template>
      <template #bottom>
        下边内容
      </template>
    </y-split>
  </div>
</template>
<script>
export default {
  data() {
    return {
      splitValue: 0.3
    };
  }
};
</script>
<style lang="less" scoped></style>
