<template>
    <h1 class="yo-anchor-com" :style="style" :id="text">{{text}}<a :href="'#'+text" class="yo-icon-link"></a></h1>
</template>
<script>
export default {
    name:'yo-anchor-com',
    props:{
        text:String,
        size:Number,
        lineHeight:Number,
    },
    data(){
        return {

        }
    },
    computed: {
        style(){
            return {
                'font-size':(this.size||16)+'px',
                'line-height':(this.lineHeight||60)+'px'
            }
        }
    },
}
</script>
<style lang="less">
    @import "../../src/assets/less/components/common/yo-anchor.less";
</style>