<template>
  <div>
    <p>{{$lang('不同颜色的按钮')}}</p>
     <yo-button color="red" textColor="white">{{$lang('不同颜色的按钮')}}</yo-button>
      <yo-button textColor="red">{{$lang('跳转到百度')}}</yo-button>
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
