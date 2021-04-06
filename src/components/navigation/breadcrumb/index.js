/**
 *  author: eric
 *  create at: 2019-12-26 16:42:34
 */

import YoBreadcrumb from './breadcrumb'

/* istanbul ignore next */
YoBreadcrumb.install = function(Vue) {
    Vue.component(YoBreadcrumb.name, YoBreadcrumb)
}

export default YoBreadcrumb
