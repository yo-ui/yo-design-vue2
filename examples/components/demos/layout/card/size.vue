<template>
  <div class="demo">
    <y-row gutter="20">
      <y-col v-for="item in sizeList" :key="item" span="3">
        <y-card title="Title" :size="item.code" icon="y">
          <template v-slot:title>
            {{ item.name }}
          </template>
          <p v-for="item in 3" :key="item">
            卡片内容
          </p>
        </y-card>
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
