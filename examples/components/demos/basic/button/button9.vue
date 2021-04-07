<template>
  <div>
    <p>{{$lang('没有边框和背景色的按钮。')}}</p>
        <y-button type="text">{{$lang('文字按钮')}}</y-button>
        <y-button type="text" disabled>Disabled {{$lang('文字按钮')}}</y-button>
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
