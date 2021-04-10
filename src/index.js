/* 
 *  author :eric 
 *  created at:2019-12-12
 *  组件列表
*/
// 基础组件
// 布局组件
import Container from './components/basic/container'
import Side from './components/basic/side'
import Header from './components/basic/header'
import Main from './components/basic/main'
import Footer from './components/basic/footer'
// grid
import Row from './components/basic/Row'
import Col from './components/basic/Col'

// button
import Button from './components/basic/Button'
import ButtonGroup from './components/basic/ButtonGroup'
// link
import Link from './components/basic/Link'
// icon
import Icon from './components/basic/Icon'

// input
import Input from './components/form/Input'
import Radio from './components/form/radio'
import Checkbox from './components/form/checkbox'
import Form from './components/form/form'
import FormItem from './components/form/form-item'

// breadcrumb
import BreadcrumbItem from './components/navigation/breadcrumb'
import Breadcrumb from './components/navigation/breadcrumb-item'

const components = [
	Container,
	Side,
	Header,
	Main,
	Footer,

	Row,
	Col,

	Button,
	ButtonGroup,
	Link,
	Icon,

	Breadcrumb,
	BreadcrumbItem,

	Form,
	FormItem,
	Input,
	Radio,
	Checkbox,
]

const install = function(Vue, opts = {}) {
	components.forEach(component => {
		Vue.component(component.name, component)
	})
	let config=opts.config||{}
	Vue.prototype.$YOUI={
		size:config.size|'',//组件大小
		zIndex:config.zIndex||1000,//弹出框索引
	}
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  	install(window.Vue)
}

export default {
	version: '1.0.0',
	install,

	Container,
	Side,
	Header,
	Main,
	Footer,

	Button,
	ButtonGroup,
	Link,
	Icon,

	Row,
	Col,
	

	Breadcrumb,
	BreadcrumbItem,
	
	Form,
	FormItem,
	Input,
	Radio,
	Checkbox,
}
