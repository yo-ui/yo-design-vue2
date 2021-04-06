<!--首页组件-->
<template>
    <div class="yo-index-page">
        <yo-header code="index"></yo-header>
        <section class="yo-slider">

        </section>
    </div>
</template>

<script>
    
    export default {
        name: 'yo-index-page',
        components: { //组件传入
            yoHeader:() => import(/* webpackChunkName: "yo-component-header" */ '@com/common/yo-header'),
        },
        data() {
            return {
            }
        },
        mounted() {
        },
        computed: {

        },
        methods: {
            
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../assets/less/pages/index.less";
</style>
