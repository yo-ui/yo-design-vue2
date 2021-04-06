/* !!
 * $store.dispatch
 * return Promise
 * ===== ===== =====
 */
import {Constants,URL} from '@/common/env'
import fqCommon from '@/common/common'
import webActions from '@/vuex/actions/web'
// import {post,get} from '@/vuex/axios'
export default {
    // ...gameActions,
    // ...coinpayActions,
    // ...outActions,
    // ...crowdActions,
    // ...nodejsActions,
    // ...websocketActions,
    ...webActions,
    // ...userActions,
    // ...blockChainActions,
}

