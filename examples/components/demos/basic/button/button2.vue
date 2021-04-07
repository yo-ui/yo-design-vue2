<template>
  <div>
    <p>{{$lang('带有跳转的按钮')}}</p>
    <y-button to="http://www.baidu.com/">{{$lang('跳转到百度')}}</y-button>
        <y-button to="http://www.baidu.com/" type="text">{{$lang('跳转到百度')}}</y-button>
        <y-button to="http://www.baidu.com/" type="text" replace>{{$lang('不保存历史的跳转')}}</y-button>
        <y-button :to="{name:'componentGuide'}" replace>{{$lang('跳转到入门')}}</y-button>
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
