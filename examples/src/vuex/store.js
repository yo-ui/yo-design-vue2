
// import axios from 'axios'

// import moment from 'moment'
// Vue.use(Vuex);
export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state:require('./state').default,
    getters:require('./getters').default,
    mutations:require('./mutations').default,
    actions:require('./actions').default
})
// Vue.use(Vuex);
// import state from './state'
// import getters from './getters'
// import mutations from './mutations'
// import actions from './actions'

// export default {
//     strict: process.env.NODE_ENV !== 'production',
//     state,
//     getters,
//     mutations,
//     actions
// }
