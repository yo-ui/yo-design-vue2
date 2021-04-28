<template>
  <div class="demo">
    <y-row gutter="20">
      <y-col v-for="item in sizeList" :key="item" span="3">
        <div style="border:1px solid #eee;">
          <y-divide :size="item.code">水平分割线</y-divide>
          <br />
          <div style="padding:10px 20px; ">
            Text
            <y-divide :size="item.code" type="vertical"></y-divide>
            <y-link type="primary">Link </y-link>
          </div>
        </div>
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
