/**
 *  author: eric
 *  create at: 2019-12-23 10:47:50
 */
<script>
const prefix='yo-a'
const template=`<slot name="left"></slot>
        <i :class="'yo-icon-'+icon" v-if="icon"></i>
        <template v-if="hasText">
            <slot></slot>
        </template>
        <i :class="'yo-icon-'+rightIcon" v-if="rightIcon"></i>
        <slot name="right"></slot>`
export default {
	name: 'yoLink',
	//存放 数据
    data: function () {
        return {
        }
    },
    //存放 子组件
    template: `
        <router-link :replace="replace" :to="to" class="yo-a" :style="yoStyles"
        :target="target" v-if="typeof(to)==='object'&&$route" 
        :class="yoClasses" :disabled="disabled">
            ${template}
        </router-link>
        <a :href="to" class="yo-a" :class="yoClasses" :style="yoStyles"
        :target="target" @click="handleClick"
        :disabled="disabled" v-else-if="to">
            ${template}
        </a>
        <a class="yo-a" :class="yoClasses" :style="yoStyles"
        :target="target" @click="handleClick"
        :disabled="disabled" v-else>
            ${template}
        </a>
        `,
    // 注意： 组件中的 所有 props 中的数据，都是通过 父组件传递给子组件的
    // props 中的数据，都是只读的，无法重新赋值
    props:{
        icon: String,
        rightIcon: String,
        //链接跳转  适用router-link参数（如果有使用Vue-Router）
        to:[String,Object],
        // 窗口打开目标     _blank, _parent,_self, _top,framename 与a标签类似
        target:String,
        //是否有下划线
        underline:{
            type:Boolean,
            default:true,
        },
        //是否禁用
        disabled:Boolean,
        //背景颜色
        color: String,
        //文字颜色
        textColor: String,
        //类型
        type:String,
        //是否记录浏览记录
        replace:{
            type:Boolean,
            default:false,
        },
	}, // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
    computed: {
        hasText() {
            let slot = this.$slots.default
            if (slot && slot.length > 0) {
                return true
            }
            return false
        },
        hrefLink(){
            let to=this.to
            if(!to){
                return ''
            }else if(typeof(to)==='string'){
                return to
            }else if(typeof(to)==='object'){
                return to.name
            }
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
                'color':`${this.textColor}`,
                // 'text-decoration':(!!this.underline?'underline':'none'),
            }
            // console.log(yoStyles)
            return yoStyles
        },
        yoClasses() {
            return {
                [`${prefix}-default`]: !this.type,
                [`${prefix}-${this.type}`]: !!this.type,
                [`${prefix}-disabled`]: !!this.disabled,
                [`${prefix}-underline`]: !!this.underline,
            }
        },
    },
    //存放 方法
    methods: {
		handleClick(evt){
            if(this.href){
                console.log('handleClick start',this.href,this.replace)
                if(this.replace){
                    location.replace(this.to)
                    // return false
                }
                // return true
            }
            console.log('handleClick end')
            // if (this.stop) {
            //     event.stopPropagation()
            // }
            // if (this.prevent) {
            //     event.preventDefault()
            // }
            this.$emit('click',evt)
		},
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
