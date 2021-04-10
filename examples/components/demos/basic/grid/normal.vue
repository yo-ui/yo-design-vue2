/** * author: eric * create at: 2019-12-21 12:21:40 */
<template>
  <div class="demo">
    <y-row>
      <y-col span="24">
        <div class="content">y-col-24</div>
      </y-col>
    </y-row>

    <y-row>
      <y-col span="12"><div class="content">y-col-12</div></y-col>
      <y-col span="12"><div class="content">y-col-12</div></y-col>
    </y-row>
    <y-row>
      <y-col span="8"><div class="content">1</div></y-col>
      <y-col span="8"><div class="content">2</div></y-col>
      <y-col span="8"><div class="content">3</div></y-col>
    </y-row>
    <y-row>
      <y-col span="6"><div class="content">1</div></y-col>
      <y-col span="6"><div class="content">2</div></y-col>
      <y-col span="6"><div class="content">3</div></y-col>
      <y-col span="6"><div class="content">4</div></y-col>
    </y-row>

    <y-row>
      <y-col span="4"><div class="content">1</div></y-col>
      <y-col span="4"><div class="content">2</div></y-col>
      <y-col span="4"><div class="content">3</div></y-col>
      <y-col span="4"><div class="content">4</div></y-col>
      <y-col span="4"><div class="content">5</div></y-col>
      <y-col span="4"><div class="content">6</div></y-col>
    </y-row>

    <y-row class="gutter" :gutter="20">
      <y-col span="8">
        <div class="content">y-col-8</div>
      </y-col>
      <y-col span="8">
        <div class="content">y-col-8</div>
      </y-col>
      <y-col span="8">
        <div class="content">y-col-8</div>
      </y-col>
    </y-row>
    <y-row class="gutter" :gutterY="20" :gutter="16">
      <y-col span="4">
        <div class="content">y-col-4</div>
      </y-col>
      <y-col span="4">
        <div class="content">y-col-4</div>
      </y-col>
      <y-col span="4">
        <div class="content">y-col-4</div>
      </y-col>
      <y-col span="4">
        <div class="content">y-col-4</div>
      </y-col>
      <y-col span="4">
        <div class="content">y-col-4</div>
      </y-col>
      <y-col span="4">
        <div class="content">y-col-4</div>
      </y-col>
    </y-row>

    <y-row class="gutter" :gutterY="5" :gutter="16">
      <y-col span="24">
        <div class="content">y-col-24</div>
      </y-col>
      <y-col span="12">
        <div class="content">y-col-12</div>
      </y-col>
      <y-col span="12">
        <div class="content">y-col-12</div>
      </y-col>
      <y-col span="4">
        <div class="content">y-col-4</div>
      </y-col>
      <y-col span="4">
        <div class="content">y-col-4</div>
      </y-col>
      <y-col span="4">
        <div class="content">y-col-4</div>
      </y-col>
    </y-row>

    <p>offset</p>

    <y-row class="gutter" :gutter="10">
      <y-col span="4" offset="2">
        <div class="content">y-col-4</div>
      </y-col>
      <y-col span="4">
        <div class="content">y-col-4</div>
      </y-col>
      <y-col span="14">
        <div class="content">y-col-14</div>
      </y-col>
    </y-row>

    <p>flex</p>

    <y-row type="flex" direction="column">
      <y-col span="4"><div class="content">y-col-4</div></y-col>
      <y-col span="4"><div class="content">y-col-4</div></y-col>
      <y-col span="4"><div class="content">y-col-4</div></y-col>
    </y-row>

    <y-row type="flex" justify="center">
      <y-col span="4" :style="[{ height: '80px' }]"
        ><div class="content">y-col-4</div></y-col
      >
      <y-col span="4" :style="[{ height: '50px' }]"
        ><div class="content">y-col-4</div></y-col
      >
      <y-col span="4" :style="[{ height: '30px' }]"
        ><div class="content">y-col-4</div></y-col
      >
    </y-row>
    <y-row type="flex" justify="flex-start">
      <y-col span="4" :style="[{ height: '80px' }]"
        ><div class="content">y-col-4</div></y-col
      >
      <y-col span="4" :style="[{ height: '50px' }]"
        ><div class="content">y-col-4</div></y-col
      >
      <y-col span="4" :style="[{ height: '30px' }]"
        ><div class="content">y-col-4</div></y-col
      >
    </y-row>
    <y-row type="flex" justify="flex-end">
      <y-col span="4" :style="[{ height: '80px' }]"
        ><div class="content">y-col-4</div></y-col
      >
      <y-col span="4" :style="[{ height: '50px' }]"
        ><div class="content">y-col-4</div></y-col
      >
      <y-col span="4" :style="[{ height: '30px' }]"
        ><div class="content">y-col-4</div></y-col
      >
    </y-row>
    <y-row type="flex" justify="space-between">
      <y-col span="4" :style="[{ height: '80px' }]"
        ><div class="content">y-col-4</div></y-col
      >
      <y-col span="4" :style="[{ height: '50px' }]"
        ><div class="content">y-col-4</div></y-col
      >
      <y-col span="4" :style="[{ height: '30px' }]"
        ><div class="content">y-col-4</div></y-col
      >
    </y-row>
    <y-row type="flex" justify="space-between">
      <y-col span="4" flex="1" :style="[{ height: '80px' }]"
        ><div class="content">y-col-4</div></y-col
      >
      <y-col span="4" flex="2" :style="[{ height: '50px' }]"
        ><div class="content">y-col-4</div></y-col
      >
      <y-col span="4" flex="1" :style="[{ height: '30px' }]"
        ><div class="content">y-col-4</div></y-col
      >
    </y-row>

    <y-row type="flex" justify="center" align="center">
      <y-col span="4" :style="[{ height: '80px' }]"
        ><div class="content">y-col-4</div></y-col
      >
      <y-col span="4" :style="[{ height: '50px' }]"
        ><div class="content">y-col-4</div></y-col
      >
      <y-col span="4" :style="[{ height: '30px' }]"
        ><div class="content">y-col-4</div></y-col
      >
    </y-row>
    <p>排序</p>
    <y-row type="flex" justify="center" align="center">
      <y-col span="4" order="2" :style="[{ height: '80px' }]"
        ><div class="content">y-col-4 2</div></y-col
      >
      <y-col span="4" order="3" :style="[{ height: '50px' }]"
        ><div class="content">y-col-4 3</div></y-col
      >
      <y-col span="4" order="1" :style="[{ height: '30px' }]"
        ><div class="content">y-col-4 1</div></y-col
      >
    </y-row>

    <y-row type="flex">
      <y-col span="20" push="4" :style="[{ height: '80px' }]">
        <div class="content">y-col-4 2</div>
      </y-col>
      <y-col span="4" pull="20" :style="[{ height: '50px' }]">
        <div class="content">y-col-4 1</div></y-col
      >
    </y-row>
  </div>
</template>
<script>
  export default {};
</script>
<style lang="less">
  .demo {
    .y-row {
      &.gutter {
        // color: #f00;
        .y-col {
          background-color: transparent;
        }
        span {
          display: block;
          background-color: aquamarine;
        }
      }
    }
  }
</style>
