<!--高亮显示代码组件 -->
<template>
  <div class="yo-code-com">
    <pre v-highlightjs="sourceCode"><code :class="type"></code></pre>
  </div>
</template>

<script>
// import yoCommon from '@/common/common'
export default {
  name: "yo-code-com",
  data() {
    return {
      sourceCode: ""
    };
  },
  props: {
    type: {
      type: String,
      default: "javascript"
    },
    src: {
      type: String
    },
    content: {
      type: String
    }
  },
  components: {
    //组件传入
  },
  async mounted() {
    this.getContent();
  },
  computed: {
    // sourceCode(){
    // }
  },
  methods: {
    getContent() {
      let { src, content } = this;
      src = `${process.env.VUE_APP_IMAGE_SERVER}${src}`;
      if (src) {
        this.$store
          .dispatch("getContent", { url: src, params: {} })
          .then(({ data }) => {
            // console.log("yo-code", that.src, data);
            this.sourceCode =
              typeof data === "object" ? JSON.stringify(data) : data;
          });
      } else if (content) {
        this.sourceCode = content;
      } else if (this.$slots.default) {
        this.sourceCode = this.$slots.default[0].text.trim();
      }
      // console.error(that.sourceCode)
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../src/assets/less/components/common/yo-code.less";
</style>
