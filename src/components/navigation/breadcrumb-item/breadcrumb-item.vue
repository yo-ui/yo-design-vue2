/**
 *  author: eric
 *  create at: 2019-12-26 16:42:52
 */
<script>
const prefix='yo-breadcrumb'
const template=`<slot name="left"></slot>
        <i :class="'yo-icon-'+icon" v-if="icon"></i>
        <template v-if="hasText">
            <slot></slot>
        </template>
        <i :class="'yo-icon-'+rightIcon" v-if="rightIcon"></i>
        <slot name="right"></slot>`
export default {
    name: 'yoBreadcrumbItem',
    template:`
    <span class="${prefix}-item">
        <router-link :to="to" v-if="typeof(to)==='object'&&$route">
            ${template}
        </router-link>
        <a :href="to" v-else-if="to">
            ${template}
        </a>
        <template v-else>
            ${template}
        </template>
        <span class="yo-breadcrumb-separator" :class="separatorIcon?('yo-icon-'+separatorIcon):''">
            {{separatorIcon?'':separator}}
        </span>
    </span>
    `,
	//存放 数据
    data: function () {
        return {
            separator:'',
            separatorIcon:'',
        }
    },
    inject:['yoBreadcrumb'],
    //存放 子组件
    // template: '',
    // 注意： 组件中的 所有 props 中的数据，都是通过 父组件传递给子组件的
    // props 中的数据，都是只读的，无法重新赋值
    props:{
        //路由相关
        to:[String,Object],
        //左边图标
        icon:String,
        //右边图标
        rightIcon:String,
        // 窗口打开目标     _blank, _parent,_self, _top,framename 与a标签类似
        target:{
            type:String,
            default:'_self',
        },
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
    },
    //存放 方法
    methods: {
		init(){
            let that=this
            that.separatorIcon=this.yoBreadcrumb.separatorIcon
            that.separator=this.yoBreadcrumb.separator
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
