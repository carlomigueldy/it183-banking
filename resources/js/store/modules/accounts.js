import axios from 'axios'
import { url } from '../url'

const state = {
    accounts: [],
    account: {},
    form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    },
    dialog: false,
}

const getters = {
    getAccounts: state => state.accounts,
    getAccount: state => state.account,
}

const mutations = {
    setAccounts: (state, accounts) => state.accounts = accounts, 
    setAccount: (state, account) => state.account = account,
    toggleCreateDialog: state => state.dialog = !state.dialog,
    clearForm: state => {
        state.form = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        }
    },
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
    async addAccount({ state, commit, dispatch, rootState }, account) {
        try {
            const access_token = rootState.token
            const res = await axios.post(`${url}/api/accounts`, {
                name: state.form.name,
                email: state.form.email,
                password: state.form.password,
                password_confirmation: state.form.password,
            }, { headers: { 'Authorization': `Bearer ${access_token}` } })

            console.log('[accounts] addAcount()', res.data)
            dispatch('fetchAccounts')
            commit('toggleCreateDialog')
            commit('setSnackbarText', 'An Account was added successfully.')
            commit('toggleSnackbar')
            commit('clearForm')
        } catch (err) {
            console.log(err.response)
            commit('setSnackbarText', 'The attempt to add an Account failed.')
            commit('toggleSnackbar')
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

