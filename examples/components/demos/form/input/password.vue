<template>
  <div>
    <input type="text" style="opacity: 0;width:0;height:0;border:none;" />
    <input type="password" style="opacity: 0;width:0;height:0;border:none;" />
    <y-input
      type="password"
      :placeholder="$lang('请输入内容')"
      v-model="yoInput"
    ></y-input>
    <br />
    <y-input
      type="password"
      clearable
      show-password
      :placeholder="$lang('请输入内容')"
      v-model="yoInput"
    ></y-input>
  </div>
</template>
