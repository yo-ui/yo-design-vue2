<template>
  <y-row gutter="20">
    <y-col span="6">
      <y-card border>
        <template v-slot:title>
          Card Title
        </template>
        <p v-for="item in 3" :key="item">
          卡片内容
        </p></y-card
      ></y-col
    ><y-col span="6" style="background-color:#ddd;">
      <y-card :border="false" style="">
        <template v-slot:title>
          Card Title
        </template>
        <p v-for="item in 3" :key="item">
          卡片内容
        </p>
      </y-card></y-col
    >
  </y-row>
</template>
