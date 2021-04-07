<template>
  <div class="demo">
    <y-button loading>{{ $lang("加载中") }}</y-button>
    <y-button loading loading-name="loading1">{{ $lang("加载中") }}</y-button>
    <y-button loading loading-name="loading2">{{ $lang("加载中") }}</y-button>
    <y-button loading loading-name="loading3">{{ $lang("加载中") }}</y-button>
    <y-button loading loading-name="loading4">{{ $lang("加载中") }}</y-button>
    <br />
    <y-button type="primary" loading>{{ $lang("加载中") }}</y-button>
    <y-button type="primary" loading loading-name="loading1">{{
      $lang("加载中")
    }}</y-button>
    <y-button type="primary" loading loading-name="loading2">{{
      $lang("加载中")
    }}</y-button>
    <y-button type="primary" loading loading-name="loading3">{{
      $lang("加载中")
    }}</y-button>
    <y-button type="primary" loading loading-name="loading4">{{
      $lang("加载中")
    }}</y-button>
    <br />

    <y-button type="primary" loading circle></y-button>
    <y-button type="info" loading loading-name="loading1" round></y-button>
    <y-button type="success" loading></y-button>
    <y-button type="warning" square loading loading-name="loading3"></y-button>
    <y-button type="dashed" loading loading-name="loading4"></y-button>
    <y-button type="error" loading loading-name="loading4"></y-button>
    <y-button type="error" ghost loading loading-name="loading4"></y-button>
    <br />
    <y-button type="primary" :loading="mouseenterStatus" @mouseenter="mouseenterEvent">{{
      $lang("鼠标划过")
    }}</y-button>
    <y-button
      type="primary"
      @click="clickEvent"
      icon="search"
      :loading="clickStatus"
      loading-name="loading1"
      >{{ $lang("异步") }}</y-button
    >
  </div>
</template>
<script>
  export default {
    data() {
      return {
        mouseenterStatus: false,
        clickStatus: false,
      };
    },
    methods: {
      mouseenterEvent() {
        this.mouseenterStatus = true;
        setTimeout(() => {
          this.mouseenterStatus = false;
        }, 2000);
      },
      clickEvent() {
        setTimeout(() => {
          this.clickStatus = true;
          setTimeout(() => {
            this.clickStatus = false;
          }, 3000);
        }, 1000);
      },
    },
  };
</script>
