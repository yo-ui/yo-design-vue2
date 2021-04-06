<!--demo页面-->
<template>
    <div class="yo-admin-page">
        <yo-header code="admin"></yo-header>
        <div class="flex-content">
        </div>
    </div>
</template>

<script>
    import yoCommon from '@/common/common'
    export default {
        name: 'yo-admin-page',
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
// @import "../assets/less/pages/index.less";
</style>
