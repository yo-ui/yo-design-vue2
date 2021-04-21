<template>
  <div class="demo">
    <y-list footer="Footer" border vertical>
      <template v-slot:header>
        Header
      </template>
      <y-list-item v-for="item in 3" :key="item">
        <y-list-item-meta title="这是标题" avatar="/static/images/demo/1.jpeg">
          <template v-slot:desc>
            这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述
          </template>
        </y-list-item-meta>
        这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区
        <template v-slot:extra>
          <img src="/static/images/demo/4.jpeg" alt="extra image" width="300" />
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
    <y-list border vertical reverse :split="false">
      <y-list-item v-for="item in 3" :key="item">
        <y-list-item-meta title="这是标题" avatar="/static/images/demo/1.jpeg">
          <template v-slot:desc>
            这是描述这是描
          </template>
        </y-list-item-meta>
        这是内容区这是内容
        <template v-slot:extra>
          <img src="/static/images/demo/4.jpeg" alt="extra image" width="300" />
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
    <y-list border reverse>
      <y-list-item v-for="item in 3" :key="item">
        <y-list-item-meta title="这是标题" avatar="/static/images/demo/1.jpeg">
          <template v-slot:desc>
            这是描述这是描述
          </template>
        </y-list-item-meta>
        这是内容区这是内容区这是
        <template v-slot:extra>
          <img src="/static/images/demo/4.jpeg" alt="extra image" width="300" />
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
