const state = {
    toggle: false,
    text: '',
}

const mutations = {
    setSnackbarText: (state, text) => state.text = text,
    toggleSnackbar: state => state.toggle = !state.toggle,
}

export default {
    state,
    mutations,
}