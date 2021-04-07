/**
 *  author: eric
 *  create at: 2019-12-12
 *  按钮组件入口
 */
import Button from './Button'

/* istanbul ignore next */
Button.install = function(Vue) {
    Vue.component(Button.name, Button)
}

export default Button
