/**
 *  author: eric
 *  create at: 2019-12-24 22:12:39
 */

import YoContainer from './container'

/* istanbul ignore next */
YoContainer.install = function(Vue) {
    Vue.component(YoContainer.name, YoContainer)
}

export default YoContainer
