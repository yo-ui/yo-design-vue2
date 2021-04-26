<template>
  <div>
    <y-split style="height:300px;">
      <template #left>
        <y-split v-model="splitValue" :border="false" type="vertical">
          <template #top>
            上边内容
          </template>
          <template #bottom>
            下边内容
          </template>
        </y-split>
      </template>
      <template #right>
        右边内容
      </template>
    </y-split>
  </div>
</template>
<script>
export default {
  data() {
    return {
      splitValue: 0.7
    };
  }
};
</script>
<style lang="less" scoped></style>
