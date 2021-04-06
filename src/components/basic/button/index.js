/**
 *  author: eric
 *  create at: 2019-12-12
 *  按钮组件入口
 */
import YoButton from './button'

/* istanbul ignore next */
YoButton.install = function(Vue) {
    Vue.component(YoButton.name, YoButton)
}

export default YoButton
