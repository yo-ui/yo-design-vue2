/**
 *  author: eric
 *  create at: 2020-01-13 16:04:37
 */

import YoRadio from './radio'

/* istanbul ignore next */
YoRadio.install = function(Vue) {
    Vue.component(YoRadio.name, YoRadio)
}

export default YoRadio
