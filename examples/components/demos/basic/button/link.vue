<template>
  <div>
    <y-button to="http://www.baidu.com/" target="_blank">{{
      $lang("跳转到百度(新窗口打开)")
    }}</y-button>
    <y-button to="http://www.baidu.com/" type="text">{{
      $lang("跳转到百度")
    }}</y-button>
    <y-button to="http://www.baidu.com/" type="success" replace>{{
      $lang("不保存历史的跳转")
    }}</y-button>
    <y-button type="primary" :to="{ name: 'componentGuide' }" replace>{{
      $lang("跳转到入门")
    }}</y-button>
  </div>
</template>
