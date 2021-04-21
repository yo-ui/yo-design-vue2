<template>
  <div class="demo">
    <y-list footer="Footer" border vertical loading>
      <template v-slot:header>
        Header
      </template>
      <y-list-item v-for="item in 2" :key="item">
        <y-list-item-meta title="这是标题" avatar="/static/images/demo/1.jpeg">
          <template v-slot:desc>
            这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述
          </template>
        </y-list-item-meta>
        这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区
        <template v-slot:extra>
          <img src="/static/images/demo/3.jpeg" alt="extra image" width="300" />
        </template>
        <template v-slot:action>
          <li><y-icon type="y" style="margin-right:8px"></y-icon> 255</li>
          <li><y-icon type="star" style="margin-right:8px"></y-icon> 255</li>
          <li><y-icon type="zan" style="margin-right:8px"></y-icon> 255</li>
          <li><y-icon type="message" style="margin-right:8px"></y-icon> 255</li>
        </template>
      </y-list-item>
    </y-list>
    <br />
    <y-list footer="Footer" border vertical loading>
      <template v-slot:header>
        Header
      </template>
      <template v-slot:loading>
        <y-icon type="loading" size="30" color="primary"></y-icon>
      </template>
      <y-list-item v-for="item in 2" :key="item">
        <y-list-item-meta title="这是标题" avatar="/static/images/demo/1.jpeg">
          <template v-slot:desc>
            这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述
          </template>
        </y-list-item-meta>
        这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区
        <template v-slot:extra>
          <img src="/static/images/demo/3.jpeg" alt="extra image" width="300" />
        </template>
        <template v-slot:action>
          <li><y-icon type="y" style="margin-right:8px"></y-icon> 255</li>
          <li><y-icon type="star" style="margin-right:8px"></y-icon> 255</li>
          <li><y-icon type="zan" style="margin-right:8px"></y-icon> 255</li>
          <li><y-icon type="message" style="margin-right:8px"></y-icon> 255</li>
        </template>
      </y-list-item>
    </y-list>
  </div>
</template>
