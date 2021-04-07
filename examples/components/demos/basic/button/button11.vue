<template>
  <div>
    <p>{{$lang('长按钮')}}</p>
        <y-button block>{{$lang('默认按钮')}}</y-button>
        <y-button block type="primary">Primary</y-button>
        <y-button block type="info">Info</y-button>
        <y-button block type="success">Success</y-button>
        <y-button block type="warning">Warning</y-button>
        <y-button block type="error">Error</y-button>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  mounted() {
	  this.$emit('loaded')
  },
};
</script>

<style lang="less" scoped>
  .yo-btn{
    margin-bottom: 10px;    
  }
</style>
