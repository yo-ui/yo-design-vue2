<template>
  <div>
    <p>{{$lang('按钮样式')}}</p>
        <y-button round>{{$lang('圆角按钮')}}</y-button>
        <y-button circle>{{$lang('圆形按钮')}}</y-button>
        <y-button square>{{$lang('方形按钮')}}</y-button>
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
