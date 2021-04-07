<template>
  <div>
    <p>{{$lang('不同颜色的按钮')}}</p>
     <y-button color="red" textColor="white">{{$lang('不同颜色的按钮')}}</y-button>
      <y-button textColor="red">{{$lang('跳转到百度')}}</y-button>
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
