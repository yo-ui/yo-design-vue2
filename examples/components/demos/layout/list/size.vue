<template>
  <div class="demo">
    <y-row gutter="20">
      <y-col v-for="item in sizeList" :key="item" span="3">
        <y-list header="Header" footer="" border :size="item.code">
          <template v-slot:header>
            {{ item.name }}
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
      </y-col>
    </y-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sizeList: [
        { name: "超大尺寸", code: "xxxl" },
        { name: "特大尺寸", code: "xxl" },
        { name: "加大尺寸", code: "xl" },
        { name: "大尺寸", code: "l" },
        { name: "默认尺寸", code: "" },
        { name: "中尺寸", code: "m" },
        { name: "小尺寸", code: "s" },
        { name: "特小尺寸", code: "xs" }
      ]
    };
  }
};
</script>
