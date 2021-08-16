// initial state
const state = {
    selected: ''
  }

  const actions = {
    setSelected({ commit }, payload) {
      commit('setSelected', payload)
    }
  }

  const mutations = {
    setSelected(state, payload) {
      state.selected = payload
    }


  }
  
  const getters = {
    getSelected(state) {
      return state.selected
    }
  }

  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }