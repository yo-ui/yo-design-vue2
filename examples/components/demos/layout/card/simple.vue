<template>
  <y-row gutter="10">
    <y-col span="8">
      <y-card hover>
        <p v-for="item in 3" :key="item">
          卡片内容
        </p>
      </y-card>
    </y-col>
  </y-row>
</template>
