<template>
  <div class="demo">
      <y-button block>{{$lang('默认按钮')}}</y-button>
      <y-button block type="primary">{{$lang("主题色按钮")}}</y-button>
      <y-button block type="dashed">{{$lang("虚框按钮")}}</y-button>
      <y-button block type="info">{{$lang("信息按钮")}}</y-button>
      <y-button block type="success">{{$lang("成功按钮")}}</y-button>
      <y-button block type="warning">{{$lang("警告按钮")}}</y-button>
      <y-button block type="error">{{$lang("错误按钮")}}</y-button>
  </div>
</template>
<script>
