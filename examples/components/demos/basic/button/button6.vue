<template>
  <div>
    <p>{{$lang('长按钮')}}</p>
        <yo-button block>{{$lang('默认按钮')}}</yo-button>
        <yo-button block type="primary">Primary</yo-button>
        <yo-button block type="info">Info</yo-button>
        <yo-button block type="success">Success</yo-button>
        <yo-button block type="warning">Warning</yo-button>
        <yo-button block type="error">Error</yo-button>
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
