<!--高亮显示代码组件 -->
<template>
    <div class="yo-code-com">
        <pre v-highlightjs="sourceCode"><code :class="type"></code></pre>
    </div>
</template>

<script>
    // import yoCommon from '@/common/common'
    export default {
        name: 'yo-code-com',
        data() {
            return {
                sourceCode:'',
            }
        },
        props:{
            type:{
                type:String,
                default:'javascript',
            },
            src:{
                type:String,
            },
            content:{
                type:String,
            }
        },
        components: { //组件传入
        },
        mounted() {
            this.getContent()
        },
        computed: {
            // sourceCode(){
                
            // }
        },
        methods: {
            getContent(){
                let that=this
                if(that.src){
                    that.$store.dispatch('getContent',{url:that.src,params:{}}).then(({data})=>{
                        that.sourceCode=data
                    })
                }else if(that.content){
                    that.sourceCode= that.content
                }else if(that.$slots.default) {
                    that.sourceCode= that.$slots.default[0].text.trim()
                }
                // console.error(that.sourceCode)
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../src/assets/less/components/common/yo-code.less";
</style>
