import axios from 'axios'
// import router from '../../router'
import { url } from '../url'

const state = {
    accounts: [],
    account: {},
    dialog: false,
    snackbar: {
        toggle: false,
        text: 'Text for snackbar',
    }
}

const getters = {
    getAccounts: state => state.accounts,
    getAccount: state => state.account,
}

const mutations = {
    setAccounts: (state, accounts) => state.accounts = accounts, 
    setAccount: (state, account) => state.account = account,
    setDialog: state => state.dialog = !state.dialog,
    setSnackbarToggle: state => state.snackbar.toggle = !state.snackbar.toggle,
    setSnackbarText: (state, text) => state.snackbar.text = text,
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

    /**
     * Fetches a single Account information.
     * 
     * @param { Integer } id 
     */
    async fetchAccount({ commit }, id) {
        try {
            const res = await axios.get(`${url}/api/accounts/${id}`)

            commit('setAccount', res.data)
        } catch (err) {
            console.log(err.response)
        }
    },

    /**
     * Send a POST request to add new Account.
     * 
     * @param { Object } teller 
     */
    async addAccount({ commit, dispatch, rootState }, account) {
        try {
            const access_token = rootState.token
            const res = await axios.post(`${url}/api/accounts`, {
                name: account.name,
                email: account.email,
                password: account.password,
                password_confirmation: account.password,
            }, { headers: { 'Authorization': `Bearer ${access_token}` } })

            console.log('[accounts] addAcount()', res.data)
            dispatch('fetchAccounts')
            commit('setDialog')
            commit('setSnackbarText', 'An Account has been added successfully!')
            commit('setSnackbarToggle')
        } catch (err) {
            console.log(err.response)
            commit('setSnackbarText', 'An Account was not added.')
            commit('setSnackbarToggle')
            commit('setDialog')
        }
    },

    /**
     * Sends an HTTP DELETE method request, 
     * to delete Account.
     * 
     * @param { Integer } id 
     */
    async deleteAccount({ dispatch }, id) {
        try {
            const res = await axios.delete(`${url}/api/accounts/${id}`, {}, {
                headers: { 'Authorization': `Bearer ${access_token}` }
            })

            console.log('[accounts] deleteAccount()', res.data)
            dispatch('fetchAccounts')
        } catch (err) {
            console.log(err.response)
        }
    },
}

export default {
    state,
    getters,
    mutations,
    actions,
}

