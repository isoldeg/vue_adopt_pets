export default {
    /* commit comes from Vuex */
    addPet: ({ commit }, payload) => {
        /* calls a mutation -> appendPet */
        commit('appendPet', payload)
    }
}