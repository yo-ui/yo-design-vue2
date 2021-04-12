<template>
  <div>
    <y-row class="gutter" :gutter="10">
      <y-col span="6">
        <div class="content">y-col-6</div>
      </y-col>
      <y-col span="6" offset="6">
        <div class="content">y-col-6</div>
      </y-col>
    </y-row>
    <y-row class="gutter" :gutter="10">
      <y-col span="6" offset="6">
        <div class="content">y-col-6</div>
      </y-col>
      <y-col span="6" offset="6">
        <div class="content">y-col-6</div>
      </y-col>
    </y-row>
    <y-row class="gutter" :gutter="10">
      <y-col span="12" offset="6">
        <div class="content">y-col-12</div>
      </y-col>
    </y-row>
  </div>
</template>
