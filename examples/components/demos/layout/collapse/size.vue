<template>
  <div>
    <y-row gutter="20">
      <y-col v-for="item in sizeList" :key="item" span="6">
        <y-collapse :size="item.code" :value="item.name">
          <y-collapse-item :header="item.name" :name="item.name">
            弟子规，圣人训。 首孝悌，次谨信。 泛爱众，而亲仁。 有余力，则学文。
            父母呼，应勿缓。 父母命，行勿懒。 父母教，须敬听。 父母责，须顺承。
            冬则温，夏则凊。 晨则省，昏则定。

            <template v-slot:action>
              <li><y-icon type="y" style="margin-right:8px"></y-icon> 255</li>
              <li>
                <y-icon type="star" style="margin-right:8px"></y-icon> 255
              </li>
              <li><y-icon type="zan" style="margin-right:8px"></y-icon> 255</li>
              <li>
                <y-icon type="message" style="margin-right:8px"></y-icon> 255
              </li>
            </template>
          </y-collapse-item>
        </y-collapse>
      </y-col>
    </y-row>
    <y-row gutter="20">
      <y-col v-for="item in sizeList2" :key="item" span="6">
        <y-collapse :size="item.code" :value="item.name">
          <y-collapse-item :header="item.name" :name="item.name">
            弟子规，圣人训。 首孝悌，次谨信。 泛爱众，而亲仁。 有余力，则学文。
            父母呼，应勿缓。 父母命，行勿懒。 父母教，须敬听。 父母责，须顺承。
            冬则温，夏则凊。 晨则省，昏则定。

            <template v-slot:action>
              <li><y-icon type="y" style="margin-right:8px"></y-icon> 255</li>
              <li>
                <y-icon type="star" style="margin-right:8px"></y-icon> 255
              </li>
              <li><y-icon type="zan" style="margin-right:8px"></y-icon> 255</li>
              <li>
                <y-icon type="message" style="margin-right:8px"></y-icon> 255
              </li>
            </template>
          </y-collapse-item>
        </y-collapse>
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
        { name: "大尺寸", code: "l" }
      ],
      sizeList2: [
        { name: "默认尺寸", code: "" },
        { name: "中尺寸", code: "m" },
        { name: "小尺寸", code: "s" },
        { name: "特小尺寸", code: "xs" }
      ]
    };
  }
};
</script>
