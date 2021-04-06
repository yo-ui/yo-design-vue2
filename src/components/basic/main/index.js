/**
 *  author: eric
 *  create at: 2019-12-25 20:50:01
 */

import YoMain from './main'

/* istanbul ignore next */
YoMain.install = function(Vue) {
    Vue.component(YoMain.name, YoMain)
}

export default YoMain
