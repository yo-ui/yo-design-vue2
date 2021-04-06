/**
 *  author: eric
 *  create at: 2019-12-20 16:22:07
 */

import YoGrid from './grid'

/* istanbul ignore next */
YoGrid.install = function(Vue) {
    Vue.component(YoGrid.name, YoGrid)
}

export default YoGrid
