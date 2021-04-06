<script>
const prefix='yo-btn'
const Props = {
    // 'xxl','xl', 'lg', 'md', 'sm', 'xs'
  size: ['l','m', 's', 'xs']
}
const template=`<slot name="left"></slot><i :class="'yo-icon-'+loadingName" v-if="loading"></i>
        <i :class="'yo-icon-'+icon" v-if="icon && !loading"></i>
        <template v-if="hasText">
            <slot></slot>
        </template>
        <i :class="'yo-icon-'+rightIcon" v-if="rightIcon && !loading"></i>
        <slot name="right"></slot>`
export default {
    name: 'yoButton',    
    inject:{
        yoButtonGroup:{
            default:'',
        }
    },
	//存放 数据
    data: function () {
        return {
        }
    },
    /**
    `
    `):
    **/
    template:`
        <router-link :replace="replace" :to="to" class="${prefix}" :style="yoStyles"
        :target="target" v-if="typeof(to)==='object'&&$route" 
        :class="yoClasses" :disabled="disabled || loading">
            ${template}
        </router-link>
        <a :href="typeof(to)=='string'?to:to.name" class="${prefix}" :class="yoClasses" :style="yoStyles"
        :target="target" @click="handleClick"
        :disabled="disabled || loading" v-else-if="isHttpLink">
            ${template}
        </a>
        <button class="${prefix}"
        @click="handleClick" :style="yoStyles"
        :disabled="disabled || loading"
        :type="nativeType"
        :class="yoClasses" v-else
        >
            ${template}
        </button>
    `,
    //存放 子组件
    // template: '',
    // 注意： 组件中的 所有 props 中的数据，都是通过 父组件传递给子组件的
    // props 中的数据，都是只读的，无法重新赋值
    props:{
        icon: String,
        rightIcon: String,
        loading: {
            type:Boolean,
        },
        block: Boolean,
        noBorder: Boolean,
        disabled: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            validator(value) {
                return Props.size.indexOf(value) != -1
            }
        },
        stop: {
            type: Boolean,
            default: false
        },
        prevent: {
            type: Boolean,
            default: false
        },
        loadingName:{
            type:String,
            default:'loading',
        },
        // text: Boolean,
        iconCircle: Boolean,
        transparent: {
            type: Boolean,
            default: false
        },
        //链接跳转  适用router-link参数（如果有使用Vue-Router）
        to:[String,Object],
        // 窗口打开目标     _blank, _parent,_self, _top,framename 与a标签类似
        target:String,
        //是否是圆角
        round: Boolean,
        //是否为朴素按钮
        plain: Boolean,
        //是否是圆形
        circle: Boolean,
        //背景颜色
        color: String,
        //文字颜色
        textColor: String,
        //是否是矩形-方形
        square: Boolean,
        //是否记录浏览记录
        replace:{
            type:Boolean,
            default:false,
        },
        //type 类型
        type:String,
        //原生控件的type  
        nativeType:{
            type: Boolean,
            default: false
        }
	}, // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
    computed: {
        hasText() {
            let slot = this.$slots.default
            if (slot && slot.length > 0) {
                return true
            }
            return false
        },
        isHttpLink(){
            let to=this.to
            let reg = /^((https|http|ftp|rtsp|mms){0,1}(:\/\/){0,1})www\.(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
            if(typeof(to)==='string'&&reg.test(to)){
                return true
            }
            return false
        },
        yoStyles(){
            let yoStyles= {
                'background-color':`${this.color}`,
                'border-color':`${this.color}`,
                'color':`${this.textColor}`,
            }
            // console.log(yoStyles)
            return yoStyles
        },
        btnSize(){
            return this.size||(this.yoButtonGroup||{}).size||this.$YOUI.size
        },
        btnRound(){
            return this.round||(this.yoButtonGroup||{}).round
        },
        yoClasses() {
            return {
                [`${prefix}-default`]: !this.type,
                [`${prefix}-${this.type}`]: !!this.type,
                [`${prefix}-circle`]: !!this.circle,
                [`${prefix}-round`]: !!this.btnRound,
                [`${prefix}-square`]: !!this.square,
                [`${prefix}-disabled`]: !!this.disabled,
                [`${prefix}-icon-circle`]: !!this.iconCircle,
                // [`${prefix}-text`]: !!this.text,
                [`${prefix}-loading`]: !!this.loading,
                [`${prefix}-block`]: !!this.block,
                [`${prefix}-${this.btnSize}`]: !!this.btnSize,
                [`${prefix}-plain`]: !!this.plain,
                [`${prefix}-transparent`]: !!this.transparent,
                [`${prefix}-no-border`]: this.noBorder === true
            }
        },
        iconCode() {
            return this.loading ? 'yo-icon-loading' : this.icon
        },
        iconCls() {
            const iconCode = this.loading ? 'yo-icon-loading' : this.icon
            return {
                [`${iconCode}`]: !!iconCode
            }
        }
    },
    //存放 方法
    methods: {
		handleClick(evt){
            if(this.isHttpLink){
                console.log('handleClick start',this.to)
                if(this.replace){
                    location.replace(this.to)
                }
                return false
            }
            console.log('handleClick end')
            if (this.stop) {
                event.stopPropagation()
            }
            if (this.prevent) {
                event.preventDefault()
            }
            this.$emit('click',evt)
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
		// console.log('------------',this.loading)
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
