<template>
  <div class="demo">
    <y-list footer="Footer" border>
      <template v-slot:header>
        Header
      </template>
      <y-list-item>
        这是一段文本
      </y-list-item>
      <y-list-item>
        这是一段文本
      </y-list-item>
      <y-list-item>
        这是一段文本
      </y-list-item>
      <y-list-item>
        这是一段文本
      </y-list-item>
    </y-list>
    <br />
    <y-list borderRadius="5" border>
      <y-list-item>
        这是一段文本
      </y-list-item>
      <y-list-item>
        这是一段文本
      </y-list-item>
      <y-list-item>
        这是一段文本
      </y-list-item>
      <y-list-item>
        这是一段文本
      </y-list-item>
    </y-list>
  </div>
</template>
