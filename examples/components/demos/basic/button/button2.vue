<template>
  <div>
    <p>{{$lang('带有跳转的按钮')}}</p>
    <yo-button to="http://www.baidu.com/">{{$lang('跳转到百度')}}</yo-button>
        <yo-button to="http://www.baidu.com/" type="text">{{$lang('跳转到百度')}}</yo-button>
        <yo-button to="http://www.baidu.com/" type="text" replace>{{$lang('不保存历史的跳转')}}</yo-button>
        <yo-button :to="{name:'componentGuide'}" replace>{{$lang('跳转到入门')}}</yo-button>
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
