<template>
  <y-row gutter="10">
    <y-col span="6">
      <y-card
        hover
        poster="https://yo-ui.gitee.io/youi/static/images/demo/3.jpeg"
        border-radius="10"
      >
        <!-- <p v-for="item in 3" :key="item">
          卡片内容
        </p> -->
        <y-card-meta
          avatar="https://yo-ui.gitee.io/youi/static/images/demo/4.jpeg"
          title="Card Title"
          desc="This is a description"
        ></y-card-meta>
        <template v-slot:action>
          <li>
            <y-link :underline="false" icon="setting" iconSize="20"></y-link>
          </li>
          <li>
            <y-link :underline="false" icon="edit" iconSize="20"></y-link>
          </li>
          <li>
            <y-link :underline="false" icon="more" iconSize="20"></y-link>
          </li>
        </template>
      </y-card>
    </y-col>
  </y-row>
</template>
