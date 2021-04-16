/**
 *  author: eric
 *  create at: 2019-12-25 20:50:01
 */

import YMain from './Main'

/* istanbul ignore next */
YMain.install = function(Vue) {
    Vue.component(YMain.name, YMain)
}

export default YMain
