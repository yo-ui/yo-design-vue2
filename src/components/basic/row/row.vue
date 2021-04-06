/**
 *  author: eric
 *  create at: 2019-12-21 13:26:02
 */
<template>
    <div :class="rowClasses" :style="rowStyles">
        <slot></slot>
    </div>
</template>
<script>
const prefixCls = 'yo-row';

const Props = {
  type: ['flex'],
  align: ['top', 'middle', 'bottom'],
  justify: ['start', 'end', 'center', 'space-around', 'space-between'],
  direction: ['row', 'row-reverse', 'column', 'column-reverse']
};
export default {
	name: 'yoRow',
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
        type: {
            validator(value) {
                return Props.type.indexOf(value) != -1;
            }
        },
        align: {
            validator(value) {
                return Props.align.indexOf(value) != -1;
            }
        },
        justify: {
            validator(value) {
                return Props.justify.indexOf(value) != -1;
            }
        },
        direction: {
            validator(value) {
                return Props.direction.indexOf(value) != -1;
            }
        },
        //间隔
        gutter: {
            type: Number,
            default: 0
        },
        gutterX:{
            type: Number,
            default: 0
        },
        gutterY:{
            type: Number,
            default: 0
        },
    }, // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
    //提供给子组件使用
    provide() {
        return {
            yoRow: this
        };
    },
    computed: {
        rowClasses() {
            return [{
                [`${prefixCls}`]: true,
                [`${prefixCls}-${this.type}`]: !!this.type,
                // [`${prefixCls}-${this.type}-${this.align}`]: !!this.align,
                // [`${prefixCls}-${this.type}-${this.direction}`]: this.direction,
                // [`${prefixCls}-${this.type}-${this.justify}`]: !!this.justify
            }]
        },
        rowStyles() {
            let style = {};
            if (this.gutter) {
                let leftTop = `-${this.gutter/2}px`;
                let rightBottom = leftTop
                style.marginLeft = leftTop;
                style.marginRight = rightBottom;
            }
            if (this.gutterX) {
                let leftTop = `-${this.gutterX/2}px`;
                let rightBottom = leftTop
                style.marginLeft = leftTop;
                style.marginRight = rightBottom;
            }
            if (this.gutterY) {
                let leftTop = `-${this.gutterY/2}px`;
                let rightBottom = leftTop
                style.marginTop = leftTop;
                style.marginBottom = rightBottom;
            }
            if(this.type=='flex'){
                if(this.direction){
                    style['flex-direction']=this.direction
                    style['-ms-flex-direction']=this.direction
                }
                if(this.justify){
                    style['justify-content']=this.justify
                    style['-ms-flex-pack']=this.justify
                }
                if(this.align){
                    style['align-items']=this.align
                    style['-ms-flex-align']=this.align
                }
            }
            return style
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
