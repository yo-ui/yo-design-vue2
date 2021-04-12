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
  </div>
</template>
