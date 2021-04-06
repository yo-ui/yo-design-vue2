
<template>
    <div class="yo-example-html-component">
        <div class="yo-example" v-if="demo&&iframe">
            <iframe class="yo-example-browser" v-if="iframe" :src="iframe" width="100%" frameborder="0" height="400"></iframe>
            <component v-if="demo" :is="com" :key="com"></component>
        </div>
    </div>
</template>
<script>
import components from '../demos'
export default {
    name:'yo-example-html-component',
    props:{
        iframe:String,
        demo:Object,
    },
    data(){
        return {

        }
    },
    components,
    
}
</script>
<style lang="less">
    
</style>