<template>
  <y-row gutter="20">
    <y-col span="8">
      <y-card border>
        <template v-slot:title>
          Card Title
        </template>
        <y-card border>
          <template v-slot:title>
            Inner Card Title
          </template>
          <template v-slot:extra>
            <y-link type="error">Delete</y-link>
          </template>
          <p v-for="item in 3" :key="item">
            卡片内容
          </p></y-card
        >
        <y-card border style="margin-top:15px" padding="30">
          <template v-slot:extra>
            <y-link type="info">Edit</y-link>
          </template>
          <template v-slot:title>
            Inner Card Title
          </template>
          <p v-for="item in 3" :key="item">
            卡片内容
          </p></y-card
        >
      </y-card></y-col
    >
  </y-row>
</template>
