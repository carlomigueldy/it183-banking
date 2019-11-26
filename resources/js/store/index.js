import Vue from 'vue'
import Vuex from 'vuex'
import appbar from './modules/appbar'
import auth from './modules/auth'
import accounts from './modules/accounts'
import tellers from './modules/tellers'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        appbar,
        auth,
        accounts,
        tellers,
    }
})