<template>
    <div class="demo">

		通过设置type为primary、dashed、text、info、success、warning、error创建不同样式的按钮，不设置为默认样式。
        <p>{{$lang('常用的操作按钮。')}}</p>
        <yo-button>Default</yo-button>		
        <yo-button type="primary">Primary</yo-button>
        <yo-button type="dashed">Dashed</yo-button>
        <yo-button type="text">Text</yo-button>
        <yo-button type="info">Info</yo-button>
        <yo-button type="success">Success</yo-button>
        <yo-button type="warning">Warning</yo-button>
        <yo-button type="error">Error</yo-button>

        <p>{{$lang('朴素简单按钮')}}</p>
        <yo-button plain>Default</yo-button>
        <yo-button plain type="primary">Primary</yo-button>
        <yo-button plain type="dashed">Dashed</yo-button>
        <yo-button plain type="text">Text</yo-button>
        <yo-button plain type="info">Info</yo-button>
        <yo-button plain type="success">Success</yo-button>
        <yo-button plain type="warning">Warning</yo-button>
        <yo-button plain type="error">Error</yo-button>
        <p>{{$lang('圆角按钮')}}</p>
        <yo-button round>Default</yo-button>
        <yo-button round type="primary">Primary</yo-button>
        <yo-button round type="dashed">Dashed</yo-button>
        <yo-button round type="text">Text</yo-button>
        <yo-button round type="info">Info</yo-button>
        <yo-button round type="success">Success</yo-button>
        <yo-button round type="warning">Warning</yo-button>
        <yo-button round type="error">Error</yo-button>
        <p>{{$lang('方形按钮')}}</p>
        <yo-button square>Default</yo-button>
        <yo-button square type="primary">Primary</yo-button>
        <yo-button square type="dashed">Dashed</yo-button>
        <yo-button square type="text">Text</yo-button>
        <yo-button square type="info">Info</yo-button>
        <yo-button square type="success">Success</yo-button>
        <yo-button square type="warning">Warning</yo-button>
        <yo-button square type="error">Error</yo-button>
        <p>{{$lang('圆形按钮')}}</p>
        <yo-button circle icon="search"></yo-button>
        <yo-button circle type="primary" icon="edit"></yo-button>
        <yo-button circle type="dashed" icon="remove"></yo-button>
        <yo-button circle type="info" icon="info"></yo-button>
        <yo-button circle type="success" icon="success"></yo-button>
        <yo-button circle type="warning" icon="warn"></yo-button>
        <yo-button circle type="error" icon="network-error"></yo-button>
        <p>{{$lang('透明按钮')}}</p>
        <section style="background:#eee;padding:10px;">
            <yo-button transparent>{{$lang('透明按钮')}}</yo-button>
        </section>
        <p>{{$lang('无边框按钮')}}</p>
        <yo-button no-border>{{$lang('无边框按钮')}}</yo-button>
        <yo-button no-border plain>{{$lang('无边框按钮')}}</yo-button>
  	</div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
	  this.$emit('loaded')
  },
};
</script>
<style lang="less">
	.demo{
		.yo-btn{
			margin-bottom: 10px;
		}
	}
</style>
