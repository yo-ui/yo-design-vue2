<template>
  <div>
    <y-row gutter="10">
      <y-col span="5">
        <y-card title="Title" to="https://github.com/yo-ui/" target="_blank">
          <p v-for="item in 3" :key="item">
            卡片内容
          </p>
        </y-card>
      </y-col>
    </y-row>
  </div>
</template>
