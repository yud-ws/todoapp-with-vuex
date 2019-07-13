import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        text: "test1"
      },
      {
        id: 2,
        text: "test2"
      }
    ]
  },
  getters: {
    todosCount: state => {
      return state.todos.length
    }
  },
  mutations: {
    addTodo(state, payload) {
      const newTodo = {
        id: state.todos.length + 1,
        text: payload.text
      }
      state.todos.push(newTodo)
    }
  },
  actions: {
    addTodo({ commit, /*state*/ }, payload) {
      commit('addTodo', payload)
    }
  }
})