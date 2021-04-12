<template>
  <div>
    <p class="center">垂直布局(默认向左对齐)</p>
    <y-row type="flex" direction="column">
      <y-col span="4"><div class="content">y-col-4</div></y-col>
      <y-col span="4"><div class="content">y-col-4</div></y-col>
      <y-col span="4"><div class="content">y-col-4</div></y-col>
    </y-row>
    <p class="center">垂直居中对齐</p>
    <y-row type="flex" align="center" direction="column">
      <y-col span="4"><div class="content">y-col-4</div></y-col>
      <y-col span="4"><div class="content">y-col-4</div></y-col>
      <y-col span="4"><div class="content">y-col-4</div></y-col>
    </y-row>
    <p class="center">垂直向右对齐</p>
    <y-row type="flex" align="flex-end" direction="column">
      <y-col span="4"><div class="content">y-col-4</div></y-col>
      <y-col span="4"><div class="content">y-col-4</div></y-col>
      <y-col span="4"><div class="content">y-col-4</div></y-col>
    </y-row>

    <p class="center">水平居中对齐</p>
    <y-row type="flex" justify="center">
      <y-col span="4"
        ><div class="content" :style="[{ height: '80px' }]">y-col-4</div></y-col
      >
      <y-col span="4"
        ><div class="content" :style="[{ height: '50px' }]">y-col-4</div></y-col
      >
      <y-col span="4"
        ><div class="content" :style="[{ height: '30px' }]">y-col-4</div></y-col
      >
    </y-row>
    <p class="center">水平向左对齐</p>
    <y-row type="flex" justify="flex-start">
      <y-col span="4"
        ><div class="content" :style="[{ height: '80px' }]">y-col-4</div></y-col
      >
      <y-col span="4"
        ><div class="content" :style="[{ height: '50px' }]">y-col-4</div></y-col
      >
      <y-col span="4"
        ><div class="content" :style="[{ height: '30px' }]">y-col-4</div></y-col
      >
    </y-row>
    <p class="center">水平向右对齐</p>
    <y-row type="flex" justify="flex-end">
      <y-col span="4"
        ><div class="content" :style="[{ height: '80px' }]">y-col-4</div></y-col
      >
      <y-col span="4"
        ><div class="content" :style="[{ height: '50px' }]">y-col-4</div></y-col
      >
      <y-col span="4"
        ><div class="content" :style="[{ height: '30px' }]">y-col-4</div></y-col
      >
    </y-row>

    <p class="center">水平两端对齐</p>
    <y-row type="flex" justify="space-between">
      <y-col span="4"
        ><div class="content" :style="[{ height: '80px' }]">y-col-4</div></y-col
      >
      <y-col span="4"
        ><div class="content" :style="[{ height: '50px' }]">y-col-4</div></y-col
      >
      <y-col span="4"
        ><div class="content" :style="[{ height: '30px' }]">y-col-4</div></y-col
      >
    </y-row>
    <p class="center">水平左右对齐</p>
    <y-row type="flex" justify="space-around">
      <y-col span="4"
        ><div class="content" :style="[{ height: '80px' }]">y-col-4</div></y-col
      >
      <y-col span="4"
        ><div class="content" :style="[{ height: '50px' }]">y-col-4</div></y-col
      >
      <y-col span="4"
        ><div class="content" :style="[{ height: '30px' }]">y-col-4</div></y-col
      >
    </y-row>

    <p class="center">水平居中对齐</p>
    <y-row type="flex" justify="center" align="center">
      <y-col span="4"
        ><div class="content" :style="[{ height: '80px' }]">y-col-4</div></y-col
      >
      <y-col span="4"
        ><div class="content" :style="[{ height: '50px' }]">y-col-4</div></y-col
      >
      <y-col span="4"
        ><div class="content" :style="[{ height: '30px' }]">y-col-4</div></y-col
      >
    </y-row>
  </div>
</template>
