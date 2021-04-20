<template>
  <div class="demo">
    <y-link icon="close" to="http://www.baidu.com/">跳转外部链接</y-link>
    <y-link icon="message" :to="{ name: 'componentButton' }"
      >跳转到button</y-link
    >
    <y-link right-icon="eye">默认文字链接</y-link>
    <y-link icon="left" right-icon="right">默认文字链接</y-link>
  </div>
</template>
