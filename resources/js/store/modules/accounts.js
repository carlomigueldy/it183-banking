import axios from 'axios'
// import router from '../../router'
import { url } from '../url'

const state = {
    accounts: [],
}

const getters = {
    getAccounts: state => state.accounts,
}

const mutations = {
    setAccounts: (state, accounts) => state.accounts = accounts, 
}

const actions = {
    /**
     * Fetches all Accounts from server.
     * 
     * @return void
     */
    async fetchAccounts({ commit }, access_token) {
        const res = await axios.get(`${url}/api/accounts`, {}, {
            headers: { 'Authorization': `Bearer ${access_token}` }
        })

        commit('setAccounts', res.data.accounts)
    },
}

export default {
    state,
    getters,
    mutations,
    actions,
}

