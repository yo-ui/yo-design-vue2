<template>
  <div class="demo">
    <y-input search loading clearable :placeholder="$lang('请输入内容')"></y-input>
    <br />
    <br />
    <y-input
      loading
      enter-button
      search
      clearable
      :placeholder="$lang('请输入内容')"
      @search="onSearch"
    ></y-input>
  </div>
</template>
<script>
  export default {
    methods: {
      onSearch() {
        alert("搜索事件处理");
      },
    },
  };
</script>
