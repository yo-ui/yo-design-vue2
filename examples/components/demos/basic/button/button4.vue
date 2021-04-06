<template>
  <div>
    <p>{{$lang('按钮样式')}}</p>
        <yo-button round>{{$lang('圆角按钮')}}</yo-button>
        <yo-button circle>{{$lang('圆形按钮')}}</yo-button>
        <yo-button square>{{$lang('方形按钮')}}</yo-button>
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
