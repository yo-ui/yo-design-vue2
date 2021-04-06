<template>
  <div>
    <p>{{$lang('按钮大小')}}</p>
      <yo-button-group>
            <yo-button :class="{'active':btnSize=='l'}" @click="switchSize('l')">{{$lang('大型按钮')}}</yo-button>
            <yo-button :class="{'active':btnSize==''}" @click="switchSize('')">{{$lang('默认按钮')}}</yo-button>
            <yo-button :class="{'active':btnSize=='m'}" @click="switchSize('m')">{{$lang('中等按钮')}}</yo-button>
            <yo-button :class="{'active':btnSize=='s'}" @click="switchSize('s')">{{$lang('小型按钮')}}</yo-button>
            <yo-button :class="{'active':btnSize=='xs'}" @click="switchSize('xs')">{{$lang('超小按钮')}}</yo-button>
        </yo-button-group>

        <yo-button :size="btnSize">Default</yo-button>		
        <yo-button :size="btnSize" type="primary">Primary</yo-button>
        <yo-button :size="btnSize" type="dashed">Dashed</yo-button>
        <yo-button :size="btnSize" type="text">Text</yo-button>
        <yo-button :size="btnSize" type="info">Info</yo-button>
        <yo-button :size="btnSize" type="success">Success</yo-button>
        <yo-button :size="btnSize" type="warning">Warning</yo-button>
        <yo-button :size="btnSize" type="error">Error</yo-button>
        <div class="line"></div>
        <yo-button :size="btnSize" plain>Default</yo-button>
        <yo-button :size="btnSize" plain type="primary">Primary</yo-button>
        <yo-button :size="btnSize" plain type="dashed">Dashed</yo-button>
        <yo-button :size="btnSize" plain type="text">Text</yo-button>
        <yo-button :size="btnSize" plain type="info">Info</yo-button>
        <yo-button :size="btnSize" plain type="success">Success</yo-button>
        <yo-button :size="btnSize" plain type="warning">Warning</yo-button>
        <yo-button :size="btnSize" plain type="error">Error</yo-button>
        <div class="line"></div>
        <yo-button :size="btnSize" round>Default</yo-button>
        <yo-button :size="btnSize" round type="primary">Primary</yo-button>
        <yo-button :size="btnSize" round type="dashed">Dashed</yo-button>
        <yo-button :size="btnSize" round type="text">Text</yo-button>
        <yo-button :size="btnSize" round type="info">Info</yo-button>
        <yo-button :size="btnSize" round type="success">Success</yo-button>
        <yo-button :size="btnSize" round type="warning">Warning</yo-button>
        <yo-button :size="btnSize" round type="error">Error</yo-button>
        <div class="line"></div>
        <yo-button :size="btnSize" square>Default</yo-button>
        <yo-button :size="btnSize" square type="primary">Primary</yo-button>
        <yo-button :size="btnSize" square type="dashed">Dashed</yo-button>
        <yo-button :size="btnSize" square type="text">Text</yo-button>
        <yo-button :size="btnSize" square type="info">Info</yo-button>
        <yo-button :size="btnSize" square type="success">Success</yo-button>
        <yo-button :size="btnSize" square type="warning">Warning</yo-button>
        <yo-button :size="btnSize" square type="error">Error</yo-button>
        <div class="line"></div>
        <yo-button :size="btnSize" circle icon="search"></yo-button>
        <yo-button :size="btnSize" circle type="primary" icon="edit"></yo-button>
        <yo-button :size="btnSize" circle type="dashed" icon="remove"></yo-button>
        <yo-button :size="btnSize" circle type="info" icon="info"></yo-button>
        <yo-button :size="btnSize" circle type="success" icon="success"></yo-button>
        <yo-button :size="btnSize" circle type="warning" icon="warn"></yo-button>
        <yo-button :size="btnSize" circle type="error" icon="network-error"></yo-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      btnSize:'',
    };
  },
  mounted() {
	  this.$emit('loaded')
  },
  methods: {
    switchSize(size){
      this.btnSize=size
    }
  },
};
</script>

<style lang="less" scoped>
  .yo-btn-group{
    margin-bottom:10px;
    display: block;
    text-align: left;
    .yo-btn{
      &.active{
        background-color: #2470ff;
        color: #fff;
      }
    }
  }
  .line{
    display: block;
    margin-bottom:10px;
  }
</style>
