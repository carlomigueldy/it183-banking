import axios from 'axios'
import { url } from '../url'

const state = {
    tellers: [],
}

const getters = {
    getTellers: state => state.tellers,
}

const mutations = {
    setTellers: (state, tellers) => state.tellers = tellers,
}

const actions = {
    /**
     * Fetch all of the Telelrs from server.
     * 
     * @param { String } access_token 
     */
    async fetchTellers({ commit }, access_token) {
        try {
            const res = await axios.get(`${url}/api/tellers`, {}, {
                headers: { 'Authorization': `Bearer ${access_token}` }
            })
    
            commit('setTellers', res.data.tellers)
        } catch (err) {
            console.log(err.response)
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
}