const state = {
    drawer: null,
}

const mutations = {
    toggleDrawer: state => state.drawer = !state.drawer, 
}

const actions = {
    toggleDrawer({ commit }) {
        commit('toggleDrawer')
    }
}

export default {
    state,
    mutations,
    actions,
}