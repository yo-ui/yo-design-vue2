/**
 *  author: eric
 *  create at: 2019-12-24 23:12:35
 */

import YoHeader from './header'

/* istanbul ignore next */
YoHeader.install = function(Vue) {
    Vue.component(YoHeader.name, YoHeader)
}

export default YoHeader
