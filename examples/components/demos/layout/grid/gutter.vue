<template>
  <div>
    <y-row :gutter="20">
      <y-col span="8">
        <div class="content">gutter="20"</div>
      </y-col>
      <y-col span="8">
        <div class="content">gutter="20"</div>
      </y-col>
      <y-col span="8">
        <div class="content">gutter="20"</div>
      </y-col>
    </y-row>

    <y-row :gutterX="20">
      <y-col span="6">
        <div class="content">gutterX="20"</div>
      </y-col>
      <y-col span="6">
        <div class="content">gutterX="20"</div>
      </y-col>
      <y-col span="6">
        <div class="content">gutterX="20"</div>
      </y-col>
      <y-col span="6">
        <div class="content">gutterX="20"</div>
      </y-col>
    </y-row>

    <y-row :gutterY="20">
      <y-col span="12">
        <div class="content">y-col-12</div>
      </y-col>
      <y-col span="12">
        <div class="content">y-col-12</div>
      </y-col>
    </y-row>

    <p class="center">{{ $lang("响应式处理") }}</p>
    <br />
    <y-row
      :gutter="{ xs: 8, sm: 16, md: 24, lg: 32, xl: 40, xxl: 48, xxxl: 54 }"
    >
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
    <br />
    <y-row :gutter="48">
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
    <br />
    <br />
  </div>
</template>
