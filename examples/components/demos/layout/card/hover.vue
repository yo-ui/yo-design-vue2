<template>
  <div>
    <y-row gutter="10">
      <y-col span="5">
        <y-card title="Title" hover>
          <p v-for="item in 3" :key="item">
            卡片内容
          </p>
        </y-card>
      </y-col>
      <y-col span="5">
        <y-card title="Title">
          <p v-for="item in 3" :key="item">
            卡片内容
          </p>
        </y-card>
      </y-col>
    </y-row>
  </div>
</template>
