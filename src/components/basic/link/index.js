/**
 *  author: eric
 *  create at: 2019-12-23 10:47:50
 */

import YoLink from './link'

/* istanbul ignore next */
YoLink.install = function(Vue) {
    Vue.component(YoLink.name, YoLink)
}

export default YoLink
