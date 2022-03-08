import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: null,
    appTitle: process.env.VUE_APP_TITLE,
    tasks:[
      {
        id: 1,
        title: 'Wake Up',
        done: true,
        dueDate: '2022-03-30'
      },
      {
        id: 2,
        title: 'Eat Breakfast',
        done: false,
        dueDate: '2022-03-30'
      },
      {
        id: 3,
        title: 'Eat Bananas',
        done: true,
        dueDate: null
      }
    ],
    snackbar: {
      show: false,
      text: ''
    },
    sorting: false
  },
  mutations: {
    setSearch(state, value) {
      state.search = value
    },
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
        dueDate: null
      }
      state.tasks.push(newTask);
      
    },
    doneTask(state, id) {
      let task = state.tasks.filter(task => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id);
    },
    updateTaskTitle(state, payload) {
      let task = state.tasks.filter(task => task.id === payload.id)[0];
      task.title = payload.title
    },
    updateTaskDueDate(state, payload) {
      let task = state.tasks.filter(task => task.id === payload.id)[0];
      task.dueDate = payload.dueDate
    },
    setTasks(state, tasks) {
      state.tasks = tasks
    },
    showSnackbar(state, text) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false
        timeout = 300
      }
      setTimeout(() => {
        state.snackbar.show = true
        state.snackbar.text = text
      }, timeout)
    },
    hideSnackbar(state) {
      state.snackbar.show = false
    },
    toggleSorting(state) {
      state.sorting = !state.sorting
    }
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit('addTask', newTaskTitle)
      commit('showSnackbar', 'A new task has been added.')
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id)
      commit('showSnackbar', 'A task has been deleted.')
    },
    updateTaskTitle({ commit }, payload) {
      commit('updateTaskTitle', payload)
      commit('showSnackbar', 'Task has been updated')
    },
    updateTaskDueDate({ commit }, payload) {
      commit('updateTaskDueDate', payload)
      commit('showSnackbar', 'Due date has been updated')
    }
  },
  modules: {
  },
  getters: {
    tasksFiltered(state) {
      if(!state.search) {
        return state.tasks
      }
      return state.tasks.filter(task => task.title.toLowerCase().includes(state.search.toLowerCase()))
    }
  }
})
