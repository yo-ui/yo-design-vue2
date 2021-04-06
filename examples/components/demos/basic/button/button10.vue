<template>
  <div>
    <p>{{$lang('以按钮组的方式出现，常用于多项类似操作。')}}</p>
        <yo-button-group>
            <yo-button type="primary" icon="left">{{$lang('上一页')}}</yo-button>
            <yo-button type="primary" right-icon="right">{{$lang('下一页')}}</yo-button>
        </yo-button-group>
        <yo-button-group round>
            <yo-button type="primary" icon="left">{{$lang('上一页')}}</yo-button>
            <yo-button type="primary" right-icon="right">{{$lang('下一页')}}</yo-button>
        </yo-button-group>
        &nbsp;
        <yo-button-group size="l">
            <yo-button type="primary" icon="add"></yo-button>
            <yo-button type="primary" icon="edit"></yo-button>
            <yo-button type="primary" icon="remove"></yo-button>
            <yo-button type="primary" icon="refresh"></yo-button>
        </yo-button-group>
        <yo-button-group round size="l">
            <yo-button type="primary" icon="add"></yo-button>
            <yo-button type="primary" icon="edit"></yo-button>
            <yo-button type="primary" icon="remove"></yo-button>
            <yo-button type="primary" icon="refresh"></yo-button>
        </yo-button-group>
        <yo-button-group size="l">
            <yo-button type="info" icon="add"></yo-button>
            <yo-button type="info" icon="edit"></yo-button>
            <yo-button type="info" icon="remove"></yo-button>
            <yo-button type="info" icon="refresh"></yo-button>
        </yo-button-group>
        <yo-button-group size="l">
            <yo-button type="success" icon="add"></yo-button>
            <yo-button type="success" icon="edit"></yo-button>
            <yo-button type="success" icon="remove"></yo-button>
            <yo-button type="success" icon="refresh"></yo-button>
        </yo-button-group>
        <yo-button-group size="l">
            <yo-button type="error" icon="add"></yo-button>
            <yo-button type="error" icon="edit"></yo-button>
            <yo-button type="error" icon="remove"></yo-button>
            <yo-button type="error" icon="refresh"></yo-button>
        </yo-button-group>
        <yo-button-group size="l">
            <yo-button type="warning" icon="add"></yo-button>
            <yo-button type="warning" icon="edit"></yo-button>
            <yo-button type="warning" icon="remove"></yo-button>
            <yo-button type="warning" icon="refresh"></yo-button>
        </yo-button-group>
        <yo-button-group reverse size="l">
            <yo-button type="warning" icon="add"></yo-button>
            <yo-button type="warning" icon="edit"></yo-button>
            <yo-button type="warning" icon="remove"></yo-button>
            <yo-button type="warning" icon="refresh"></yo-button>
        </yo-button-group>
        &nbsp;
        <yo-button-group size="xs">
            <yo-button icon="add"></yo-button>
            <yo-button icon="edit"></yo-button>
            <yo-button icon="remove"></yo-button>
            <yo-button icon="refresh"></yo-button>
        </yo-button-group>
        <br>
        <br>
        <yo-button-group vertical>
            <yo-button type="primary" icon="add"></yo-button>
            <yo-button type="primary" icon="edit"></yo-button>
            <yo-button type="primary" icon="remove"></yo-button>
            <yo-button type="primary" icon="refresh"></yo-button>
        </yo-button-group>
        &nbsp;
        <yo-button-group vertical>
            <yo-button icon="add"></yo-button>
            <yo-button icon="edit"></yo-button>
            <yo-button icon="remove"></yo-button>
            <yo-button icon="refresh"></yo-button>
        </yo-button-group>
        &nbsp;
        <yo-button-group round vertical>
            <yo-button icon="add"></yo-button>
            <yo-button icon="edit"></yo-button>
            <yo-button icon="remove"></yo-button>
            <yo-button icon="refresh"></yo-button>
        </yo-button-group>

        &nbsp;
        <yo-button-group reverse round vertical>
            <yo-button icon="add"></yo-button>
            <yo-button icon="edit"></yo-button>
            <yo-button icon="remove"></yo-button>
            <yo-button icon="refresh"></yo-button>
        </yo-button-group>
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
    .yo-btn-group{
        margin-bottom:20px;
        margin-right: 20px;
    }
</style>
