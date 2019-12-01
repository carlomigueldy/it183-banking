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
    getAccountNumbers: state => {
        const accountNumbers = state.accounts.map(val => val.account.account_number)
        return accountNumbers
    }
}

const mutations = {
    setAccounts: (state, accounts) => state.accounts = accounts, 
    setAccount: (state, account) => state.account = account,
    toggleAccountCreateDialog: state => state.dialog = !state.dialog,
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
        try {
            const res = await axios.get(`${url}/api/accounts`, {}, {
                headers: { 'Authorization': `Bearer ${access_token}` }
            })
    
            commit('setAccounts', res.data.accounts)
        } catch (err) {
            console.log(err.reponse)
        }
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
            console.log('err.response', err.response)
            console.log('err', err)
        }
    },

    async checkAccount({ commit, rootState }, account_number) {
        try {
            const access_token = rootState.token
            const res = await axios.post(`${url}/api/accounts/checkAccount`, {
                account_number: account_number,
            }, { headers: { 'Authorization': `Bearer ${access_token}` } })
    
            console.log(res.data)
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
            const access_token = rootState.auth.token
            const res = await axios.post(`${url}/api/accounts`, {
                name: state.form.name,
                email: state.form.email,
                password: state.form.password,
                password_confirmation: state.form.password,
            }, { headers: { 'Authorization': `Bearer ${access_token}` } })

            console.log('[accounts] addAcount()', res.data)
            dispatch('fetchAccounts')
            commit('toggleAccountCreateDialog')
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
    
    async userWithdrawCash({ rootState, dispatch }, form) {
        const access_token = rootState.auth.token
        const user = rootState.auth.user
        try {
            const res = await axios.post(`${url}/api/accounts/withdraw`, {
                amount: form.amount,
                user_id: user.id,
            }, { headers: { 'Authorization': `Bearer ${access_token}` } })

            console.log('userWithdrawCash()', res.data)
            dispatch('getAuthUser', { root: true })
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

