/**
 *  author: eric
 *  create at: 2019-12-26 16:42:34
 */
<template>
    <div class="yo-breadcrumb">
        <template v-if="items&&items.length>0">
            <template v-for="(item,index) in items">
                <yo-breadcrumb-item :key="index" :icon="item.icon" :right-icon="item.rightIcon" :to="item.to">
                    {{item.title}}
                </yo-breadcrumb-item>
            </template>
        </template>
        <template v-else>
            <slot></slot>
        </template>
    </div>
</template>
<script>
export default {
	name: 'yoBreadcrumb',
	//存放 数据
    data: function () {
        return {
            // size:0,
        }
    },
    provide(){
        return {
            yoBreadcrumb:this,
        }
    },
    //存放 子组件
    // template: '',
    // 注意： 组件中的 所有 props 中的数据，都是通过 父组件传递给子组件的
    // props 中的数据，都是只读的，无法重新赋值
    props:{
        items:Array,
        separator:{
            type:String,
            default:'/'
        },
        separatorIcon:String,
	}, // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
    computed: {

    },
    //存放 方法
    methods: {
		init(){
            // let that=this
            // let items=that.items
            // if(items&&items.length>0){
            //     that.size=items.length
            // }else{
            //     let slot=that.$slots.default||[]
            //     that.size=slot.length
            // }
		}
	},
    //存放 过滤器
    filters: {

	},
    //自定义 私有指令
    directives: {

    },
    /*  生命周期函数  */
    //创建期间
    beforeCreate() { 

	},
    created() { 

	},
    beforeMount() { 

	},
    mounted() { 
		this.init()
	},
    //运行期间
    beforeUpdate() {

	},
    updated() {

	},
    //销毁时期
    beforeDestroy() {

	},
    destroyed() {

	}
}
</script>
