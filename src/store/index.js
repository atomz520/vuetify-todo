import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks:[
      {
        id: 1,
        title: 'Wake Up',
        done: true
      },
      {
        id: 2,
        title: 'Eat Breakfast',
        done: false
      },
      {
        id: 3,
        title: 'Eat Bananas',
        done: true
      }
    ],
    snackbar: {
      show: true,
    }
  },
  mutations: {
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false
      }
      state.tasks.push(newTask);
      //TODO
      //commit('showSnackBar',)
    },
    doneTask(state, id) {
      let task = state.tasks.filter(task => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id);
    },
    showSnackbar(state) {
      state.snackbar.show = true
    }
  },
  actions: {
  },
  modules: {
  }
})
