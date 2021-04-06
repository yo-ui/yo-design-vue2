<template>
  <div>
    <p>{{$lang('带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。')}}</p>
        <yo-button icon="search">{{$lang('图标按钮')}}</yo-button>
        <yo-button icon="eye">{{$lang('图标按钮')}}</yo-button>
        <yo-button loading type="primary">{{$lang('loading图标按钮')}}</yo-button>
        <yo-button loading loading-name="loading1" type="primary">{{$lang('loading图标按钮')}}</yo-button>
        <yo-button icon="message">{{$lang('图标按钮')}}</yo-button>
        <yo-button icon="loading3">{{$lang('图标按钮')}}</yo-button>
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
