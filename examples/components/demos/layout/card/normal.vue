<template>
  <div>
    <y-row gutter="15">
      <y-col span="12">
        <y-card icon="user" title="卡片标题">
          <p>卡片内容</p>
          <p>卡片内容</p>
          <p>卡片内容</p>
        </y-card>
      </y-col>
      <y-col span="12">
        <y-card title="卡片标题" borderRadius="8">
          <p>卡片内容</p>
          <p>卡片内容</p>
          <p>卡片内容</p>
          <template v-slot:extra>
            <li>
              <y-icon type="share" size="16">分享</y-icon>
            </li>
            <li>
              <y-link type="info">更多...</y-link>
            </li>
          </template>
        </y-card>
      </y-col>
    </y-row>
  </div>
</template>
