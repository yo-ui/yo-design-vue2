/**
 *  author: eric
 *  create at: 2019-12-24 22:12:39
 */
<template>
    <div :class="yoClasses">
        <slot></slot>
    </div>
</template>
<script>
const prefix='yo-container'
export default {
	name: 'yoContainer',
	//存放 数据
    data: function () {
        return {
        }
    },
    //存放 子组件
    // template: '',
    // 注意： 组件中的 所有 props 中的数据，都是通过 父组件传递给子组件的
    // props 中的数据，都是只读的，无法重新赋值
    props:{
        vertical:{
            type:Boolean,
            default:false,
        },
        horizontal:{
            type:Boolean,
            default:false,
        },
	}, // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
    computed: {
        isVertical(){
            let that=this
            if(that.vertical){
                return true
            }else if(that.horizontal){
                return false
            }
            let slot=that.$slots.default
            return slot.some(item=>{
                let options=item.componentOptions
                return options.tag=='yo-header'||options.tag=='yo-footer'
            })
        },
        yoClasses(){
            return {
                [`${prefix}`]: true,
                [`${prefix}-vertical`]: !!this.isVertical,
            }
        }
    },
    //存放 方法
    methods: {
		init(){

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
