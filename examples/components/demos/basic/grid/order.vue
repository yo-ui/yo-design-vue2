<template>
  <div>
    <!-- <p>排序</p> -->
    <y-row type="flex" justify="center" align="center">
      <y-col span="4" order="2"
        ><div class="content" :style="[{ height: '80px' }]">y-col-4 2（原1）</div></y-col
      >
      <y-col span="4" order="3"
        ><div class="content" :style="[{ height: '50px' }]">y-col-4 3（原2）</div></y-col
      >
      <y-col span="4" order="1"
        ><div class="content" :style="[{ height: '30px' }]">y-col-4 1（原3）</div></y-col
      >
    </y-row>

    <y-row type="flex">
      <y-col span="20" push="4" :style="[{ height: '80px' }]">
        <div class="content">y-col-4 2（原1）</div>
      </y-col>
      <y-col span="4" pull="20" :style="[{ height: '50px' }]">
        <div class="content">y-col-4 1（原2）</div></y-col
      >
    </y-row>
  </div>
</template>
