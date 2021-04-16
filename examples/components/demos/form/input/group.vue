<template>
  <div>
    <y-input size="l" :placeholder="$lang('请输入内容')" style="width:300px">
      <span slot="prepend">http://</span>
    </y-input>
    <br />
    <br />
    <y-input size="l" :placeholder="$lang('请输入内容')" style="width:300px">
      <span slot="prepend">http://</span>
      <span slot="append">.com</span>
    </y-input>
    <br />
    <br />
    <y-input size="l" :placeholder="$lang('请输入内容')" style="width:300px">
      <span slot="append">.com</span>
    </y-input>
    <br />
    <br />
    <y-input size="l" :placeholder="$lang('请输入内容')" style="width:300px">
      <span slot="append" class="yo-icon-search"></span>
    </y-input>
  </div>
</template>
