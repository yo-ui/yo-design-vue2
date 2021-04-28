<template>
  <div class="demo">
    <y-list footer="Footer" border>
      <template v-slot:header>
        Header
      </template>
      <y-list-item v-for="item in 5" :key="item">
        <y-list-item-meta
          title="这是标题"
          desc="这是描述"
          avatar="/static/images/demo/1.jpeg"
        >
        </y-list-item-meta>
        这是内容区
        <template v-slot:action>
          <li>
            <!-- <a href="javascript:void(0)">编辑</a> -->
            <y-link type="primary" :underline="false">编辑</y-link>
          </li>
          <li>
            <a href="javascript:void(0)">
              <y-icon type="remove" color="primary"></y-icon> 删除</a
            >
          </li>
        </template>
      </y-list-item>
    </y-list>
  </div>
</template>
