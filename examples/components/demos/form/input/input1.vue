<template>
  <div class="demo">
    <!-- {{ $lang("双向绑定") }}:{{ yoInput }} <br />
    <p>{{ $lang("基础用法") }}</p>
    <y-input :placeholder="$lang('请输入内容')" v-model="yoInput"></y-input> -->

    <p>{{ $lang("尺寸") }}</p>
    <y-input
      size="l"
      :placeholder="$lang('请输入内容')"
      v-model="yoInput"
    ></y-input>
    <y-input
      size="m"
      :placeholder="$lang('请输入内容')"
      v-model="yoInput"
    ></y-input>
    <y-input :placeholder="$lang('请输入内容')" v-model="yoInput"></y-input>
    <y-input
      size="s"
      :placeholder="$lang('请输入内容')"
      v-model="yoInput"
    ></y-input>
    <y-input
      size="xs"
      :placeholder="$lang('请输入内容')"
      v-model="yoInput"
    ></y-input>

    <p>{{ $lang("可清空") }}</p>
    <y-input
      :placeholder="$lang('请输入内容')"
      v-model="yoInput"
      clearable
    ></y-input>
    <p>{{ $lang("显示字数统计") }}</p>
    <y-input
      show-word-limit
      clearable
      maxlength="100"
      :placeholder="$lang('请输入内容')"
      v-model="yoInput1"
    ></y-input>
    <y-input
      show-word-limit
      outer
      maxlength="100"
      :placeholder="$lang('请输入内容')"
      v-model="yoInput"
    ></y-input>
    <y-input
      show-word-limit
      :placeholder="$lang('请输入内容')"
      v-model="yoInput"
    ></y-input>
    <y-input
      type="textarea"
      show-word-limit
      :placeholder="$lang('请输入内容')"
      v-model="yoInput"
    ></y-input>

    <p>{{ $lang("禁用状态") }}</p>
    <y-input
      disabled
      :placeholder="$lang('请输入内容')"
      v-model="yoInput"
    ></y-input>
    <y-input
      type="textarea"
      disabled
      :placeholder="$lang('请输入内容')"
      v-model="yoInput"
    ></y-input>
    <!-- <p>{{ $lang("密码框") }}</p> -->

    <p>{{ $lang("带icon的输入框") }}</p>
    {{ $lang("属性方式") }}:
    <y-input
      right-icon="calendar"
      :placeholder="$lang('请输入内容')"
      v-model="yoInput"
    ></y-input>
    <y-input
      icon="search"
      :placeholder="$lang('请输入内容')"
      v-model="yoInput"
    ></y-input>
    <br />
    {{ $lang("slot方式") }}:
    <y-input :placeholder="$lang('请输入内容')" v-model="yoInput">
      <i class="yo-icon-calendar" slot="right"></i>
    </y-input>
    <y-input :placeholder="$lang('请输入内容')" v-model="yoInput">
      <i class="yo-icon-search" slot="left"></i>
    </y-input>

    <p>{{ $lang("复合型输入框") }}</p>
    <y-input :placeholder="$lang('请输入内容')" v-model="yoInput">
      <span slot="prepend">Http://</span>
    </y-input>
    <y-input size="l" :placeholder="$lang('请输入内容')" v-model="yoInput">
      <span slot="append">.com</span>
    </y-input>
    <y-input :placeholder="$lang('请输入内容')" v-model="yoInput">
      <span slot="append" class="yo-icon-search"></span>
    </y-input>
    <p>{{ $lang("开启 search 属性，可以设置为搜索型输入框。") }}</p>
    <y-input search :placeholder="$lang('请输入内容')" v-model="yoInput">
    </y-input>
    <y-input
      search
      size="l"
      enter-button
      :placeholder="$lang('请输入内容')"
      v-model="yoInput"
    >
    </y-input>
    <y-input
      search
      enter-button="Search"
      :placeholder="$lang('请输入内容')"
      v-model="yoInput"
    >
    </y-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      yoInput: 1,
      yoInput1: 2
    };
  },
  mounted() {
    this.$emit("loaded");
  }
};
</script>
<style lang="less" scoped>
.demo {
  .y-input {
    margin-right: 10px;
  }
}
</style>
