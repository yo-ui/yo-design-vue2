/**
 *  author: eric
 *  create at: 2020-01-15 00:03:52
 */
<script>
const prefix='yo-checkbox'
const Props = {
    // 'xxl','xl', 'lg', 'md', 'sm', 'xs'
  size: ['l','m', 's', 'xs']
}
export default {
    name: 'yoCheckbox',
    template:`
        <template v-if="items&&items.length>0">
            <label v-for="(item,index) in items" class="${prefix}" :class="yoClasses" :style="yoStyles">
                <i class="yo-icon" :class="iconClasses"></i>
                <input ref="checkbox" type="checkbox" 
                    class="${prefix}-inner"
                    aria-hidden="true"
                    v-model="model"
                    :name="name"
                    :disabled="disabled"
                    :value="label"
                >
                <slot></slot>
                <template v-if="!$slots.default">
                    {{label}}
                </template>
            </label>
        </template>
        <label v-else class="${prefix}" :class="yoClasses" :style="yoStyles">
            <i class="yo-icon" :class="iconClasses"></i>
            <input ref="checkbox" type="checkbox"
                class="${prefix}-inner"
                aria-hidden="true"
                v-model="model"
                :disabled="disabled"
                :name="name"
                :value="label"
            >
            <slot></slot>
            <template v-if="!$slots.default">
                {{label}}
            </template>
        </label>
    `,
    inject:{
        yoCheckboxGroup:{
            default:'',
        },
        yoForm:{
            default:''
        },
        yoFormItem:{
            default:''
        }
    },
	//存放 数据
    data () {
        return {
            datas:[],
        }
    },
    //存放 子组件
    // template: '',
    // 注意： 组件中的 所有 props 中的数据，都是通过 父组件传递给子组件的
    // props 中的数据，都是只读的，无法重新赋值
    props:{
        name:{
            type:[String]
        },
        value:{
        },
        type:{
            type:[Number,String],
            default:0,
        },
        items:{
            type:Array,
        },
        label:{
            type:[String,Boolean],
            default:'',
        },
        trueValue:{
            type:[Object],
            default:true,
        },
        falseValue:{
            type:[Object],
            default:false,
        },
        size:{
            type: String,
            validator(value) {
                return Props.size.indexOf(value) != -1
            }
        },
        border:{
            type:Boolean,
            default:false,
        },
        disabled:{
            type:Boolean,
            default:false,
        },
        round:{
            type:Boolean,
            default:false,
        },
        circle:{
            type:Boolean,
            default:false,
        },
	}, // 把父组件传递过来的 parentmsg 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
    computed: {
        checkboxSize(){
            return this.size||(this.yoCheckboxGroup||{}).size||this.$YOUI.size
        },
        model:{
            get() {
                let value=(this.yoCheckboxGroup||{}).value||this.value
                console.log('get ----------',value)
                return value
            },
            set(val) {
                console.log('----------',val,this.label)
                if(!this.label){
                    if(this.$refs.checkbox && this.$refs.checkbox.checked){
                        val=this.label=this.trueValue
                    }else{
                        val=this.value=this.falseValue
                    }
                    if(val===true){
                        this.$refs.checkbox.checked=true
                    }else{
                        this.$refs.checkbox.checked=false
                    }
                }
                let checked=this.$refs.checkbox.checked
                let datas=val||[]
                let label=this.label
                console.log('----------',val,datas,'start')
                if(datas.indexOf(label)!==-1){
                    if(!checked){
                        datas.splice(datas.indexOf(label),1)
                    }
                }else{
                    if(checked){
                        datas.push(label)
                    }
                }
                console.log('----------',val,datas,'end')
                if (this.yoCheckboxGroup) {
                    this.yoCheckboxGroup.$emit('input',datas)
                } else {
                    this.$emit('input', datas)
                }
                // this.$refs.checkbox && (this.$refs.checkbox.checked ==this.label?( this.model == this.label):!this.model);
            }
        },
        isDisabled(){
            return (this.yoForm||{}).disabled||(this.yoFormItem||{}).disabled||(this.yoCheckboxGroup||{}).disabled||this.disabled
        },
        yoStyles(){
            let yoStyles= {
                // 'background-color':`${this.color}`,
                // 'border-color':`${this.color}`,
                // 'color':`${this.textColor}`,
            }
            return yoStyles
        },
        iconClasses(){
            if( Number(this.type)===0){
                return {
                    [{true:[`yo-icon-checkbox-on`],false:[`yo-icon-checkbox-off`]}[this.model === this.label]]:true,
                }
            }else if( Number(this.type)===1){
                return {
                    [{true:[`yo-icon-checkbox1-on`],false:[`yo-icon-checkbox1-off`]}[this.model == this.label]]: true,
                }
            }else if( Number(this.type)===2){
                return {
                    [{true:[`yo-icon-checkbox2-on`],false:[`yo-icon-checkbox2-off`]}[this.model === this.label]]: true,
                }
            }else if( Number(this.type)===3){
                return {
                    [{true:[`yo-icon-checkbox11-on`],false:[`yo-icon-checkbox1-off`]}[this.model === this.label]]: true,
                }
            }
        },
        yoClasses() {
            return {
                // [`${prefix}-default`]: !this.type,
                [`${prefix}-${this.type}`]: !!this.type,
                [`${prefix}-border`]: !!this.border,
                [`${prefix}-circle`]: !!this.circle,
                [`${prefix}-round`]: !!this.round,
                // [`${prefix}-square`]: !!this.square,
                [`${prefix}-disabled`]: !!this.disabled,
                // [`${prefix}-icon-circle`]: !!this.iconCircle,
                // // [`${prefix}-text`]: !!this.text,
                // [`${prefix}-loading`]: !!this.loading,
                // [`${prefix}-block`]: !!this.block,
                // [`${prefix}-${this.btnSize}`]: !!this.btnSize,
                // [`${prefix}-plain`]: !!this.plain,
                // [`${prefix}-transparent`]: !!this.transparent,
            }
        },
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
