import Vue from 'vue'
import Vuex from 'vuex'
import snackbar from './modules/snackbar'
import appbar from './modules/appbar'
import auth from './modules/auth'
import accounts from './modules/accounts'
import tellers from './modules/tellers'
import transactions from './modules/transactions'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        snackbar,
        appbar,
        auth,
        accounts,
        tellers,
        transactions,
    }
})