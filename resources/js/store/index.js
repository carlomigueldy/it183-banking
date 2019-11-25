import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import accounts from './modules/accounts'
import tellers from './modules/tellers'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        accounts,
        tellers,
    }
})