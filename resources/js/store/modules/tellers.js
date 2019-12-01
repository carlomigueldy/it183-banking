import axios from 'axios'
import { url } from '../url'

const state = {
    tellers: [],
    teller: {},
    form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    },
    dialog: false,
}

const getters = {
    getTellers: state => state.tellers,
    getTeller: state => state.teller,
}

const mutations = {
    setTellers: (state, tellers) => state.tellers = tellers,
    setTeller: (state, teller) => state.teller = teller,
    toggleTellerCreateDialog: state => state.dialog = !state.dialog,
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
    },

    /**
     * Fetches a single Teller information.
     * 
     * @param { Integer } id 
     */
    async fetchTeller({ commit }, id) {
        try {
            const res = await axios.get(`${url}/api/tellers/${id}`)

            commit('setTeller', res.data)
        } catch (err) {
            console.log(err.response)
        }
    },

    /**
     * Send a POST request to add new Teller.
     * 
     * @param { Object } teller 
     */
    async addTeller({ state, commit, dispatch, rootState }, teller) {
        try {
            const access_token = rootState.token
            const res = await axios.post(`${url}/api/tellers`, {
                name: state.form.name,
                email: state.form.email,
                password: state.form.password,
                password_confirmation: state.form.password,
            }, { headers: { 'Authorization': `Bearer ${access_token}` } })

            console.log('[tellers] addTeller()', res.data)
            dispatch('fetchTellers')
            commit('toggleTellerCreateDialog')
            commit('setSnackbarText', res.data.message)
            commit('toggleSnackbar')
            commit('clearForm')
        } catch (err) {
            console.log(err.response)
            commit('setSnackbarText', 'The attempt to add a Teller failed.')
            commit('toggleSnackbar')
        }
    },

    /**
     * Sends an HTTP DELETE method request, 
     * to delete Teller.
     * 
     * @param { Integer } id 
     */
    async deleteTeller({ dispatch }, id) {
        try {
            const res = await axios.delete(`${url}/api/tellers/${id}`, {}, {
                headers: { 'Authorization': `Bearer ${access_token}` }
            })

            console.log('[tellers] deleteTeller()', res.data)
            dispatch('fetchTellers')
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