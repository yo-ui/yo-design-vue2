<template>
  <div>
    <!-- <p>{{ $lang("带icon的输入框") }}</p> -->
    <!-- {{ $lang("属性方式") }}: -->
    <p>{{ $lang("属性方式") }}</p>
    <y-input
      left-icon="user"
      :placeholder="$lang('请输入内容')"
      style="margin-right: 20px"
    ></y-input>
    <y-input icon="search" :placeholder="$lang('请输入内容')"></y-input>
    <br />
    <br />

    <p>{{ $lang("slot方式") }}</p>
    <y-input :placeholder="$lang('请输入内容')" style="margin-right: 20px">
      <i class="yo-icon-calendar" slot="suffix"></i>
    </y-input>
    <y-input :placeholder="$lang('请输入内容')">
      <i class="yo-icon-search" slot="prefix"></i>
    </y-input>
    <br />
    <br />

    <!-- <p>{{ $lang("复合型输入框") }}</p> -->
  </div>
</template>
