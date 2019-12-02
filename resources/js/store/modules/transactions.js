import axios from 'axios'
import { url } from '../url'

const state = {
    transactions: [],
}

const mutations = {
    setTransactions: (state, transactions) => state.transactions = transactions,
}

const actions = {
    async fetchTransactions({ commit }) {
        try {
            const res = await axios.get(`${url}/api/transactions`)

            commit('setTransactions', res.data)
        } catch (err) {
            console.log(err.response)
        }
    },
    
    /**
     * Teller deposits cash into an Account Holder's balance.
     * 
     * @param { Object } form 
     */
    async depositCash({ rootState }, form) {
        const access_token = rootState.auth.token
        const user = rootState.auth.user
        try {
            const res = await axios.post(`${url}/api/deposit`, {
                account_number: form.account_number,
                amount: form.amount,
                user_id: user.id,
            }, { headers: { 'Authorization': `Bearer ${access_token}` } })

            console.log('depositCash', res.data)
            rootState.snackbar.text = `Cash amount $${form.amount} deposited to account number ${form.account_number}.`
            rootState.snackbar.toggle = true
        } catch (err) {
            console.log(err.response)
        }
    },

    /**
     * Withdraws an amount for an Account Holder.
     * 
     * @param { Object } form 
     */
    async withdrawCash({ rootState }, form) {
        const access_token = rootState.auth.token
        const user = rootState.auth.user
        try {
            const res = await axios.post(`${url}/api/withdraw`, {
                account_number: form.account_number,
                amount: form.amount,
                user_id: user.id,
            }, { headers: { 'Authorization': `Bearer ${access_token}` } })

            console.log(res.data)
            rootState.snackbar.text = `Cash amount $${form.amount} withdrawn from account number ${form.account_number}.`
            rootState.snackbar.toggle = true
        } catch (err) {
            console.log(err.response)
        }
    },
}

export default {
    state,
    mutations,
    actions,
}