import axios from 'axios'
import { url } from '../url'

const state = {
    logs: []
}

const getters = {
    getLogs: state => state.logs,
    
    mappedLogs: state => {
        const logs = state.logs
        const mappedLogs = logs.map(val => {
            return { 
                log_message: `[${val.created_at}] Teller ${val.account_transaction.user.name} ${val.amount_deposit > 0 ? 'deposits $' + val.amount_deposit + ' to ' : val.amount_withdraw > 0 ? 'withdraws $' + val.amount_withdraw + ' to ' : 'N/A'} Account Holder ${val.account_transaction.account.user.name} with account number ${val.account_transaction.account.account_number}.`
            }
        })

        return mappedLogs
    },
}

const mutations = {
    setLogs: (state, logs) => state.logs = logs,
}

const actions = {
    /**
     * Fetches all the transaction logs.
     */
    async fetchLogs({ commit }) {
        try {
            const res = await axios.get(`${url}/api/logs`)
            
            console.log(res.data)
            commit('setLogs', res.data)
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