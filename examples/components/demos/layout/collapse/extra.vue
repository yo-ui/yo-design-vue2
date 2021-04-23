<template>
  <div>
    <p>图标显示位置</p>
    <y-button-group>
      <y-button
        :type="position === 'left' ? 'primary' : ''"
        @click="position = 'left'"
        >左边显示</y-button
      >
      <y-button
        :type="position === 'right' ? 'primary' : ''"
        @click="position = 'right'"
        >右边显示</y-button
      >
    </y-button-group>
    <br />
    <br />
    <y-collapse
      :icon-position="position"
      v-model="activeKey"
      @change="changeEvent"
    >
      <y-collapse-item header="This is item header 1" name="collapse1">
        人之初，性本善。性相近，习相远。 苟不教，性乃迁。教之道，贵以专。
        昔孟母，择邻处。子不学，断机杼。 窦燕山，有义方。教五子，名俱扬。
        养不教，父之过。教不严，师之惰。 子不学，非所宜。幼不学，老何为。
        玉不琢，不成器。人不学，不知义。 为人子，方少时。亲师友，习礼仪。
        香九龄，能温席。孝于亲，所当执。 融四岁，能让梨。弟于长，宜先知。
        首孝悌，次见闻。知某数，识某文。
        <template #extra>
          <y-link typ="primary" iconSize="20" icon="setting"></y-link>
        </template>
      </y-collapse-item>
      <y-collapse-item header="This is item header 2" name="collapse2">
        弟子规，圣人训。 首孝悌，次谨信。 泛爱众，而亲仁。 有余力，则学文。
        父母呼，应勿缓。 父母命，行勿懒。 父母教，须敬听。 父母责，须顺承。
        冬则温，夏则凊。 晨则省，昏则定。
        <template #extra>
          <y-link typ="primary" iconSize="20" icon="setting">设置</y-link>
        </template>
      </y-collapse-item>
    </y-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      position: "left",
      activeKey: ["collapse1"]
    };
  },
  methods: {
    changeEvent(names) {
      console.log(names);
    }
  }
};
</script>
