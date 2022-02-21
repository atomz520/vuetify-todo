<template> 
  <div class="home pa-6">
    <h1>To-do Page</h1>
    <v-text-field
      v-model="newTaskTitle"
      @click:append="addTask"
      @keyup.enter="addTask"
      class="pa-3"
      outlined
      label="Add a Task"
      append-icon="mdi-plus"
      hide-details
      clearable
    >
    </v-text-field>

    <v-list
      v-if="tasks.length"
      class="pt-0"
      flat 
    > 
      <div v-for="task in tasks"
          :key="task.id">
        <v-list-item
          @click="doneTask(task.id)"
          :class="{'blue lighten-5' : task.done}"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox
                :input-value="task.done"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
              :class="{'text-decoration-line-through' : task.done}"
              >{{ task.title }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn 
              icon
              @click.stop="deleteTask(task.id)"
              >
                <v-icon color="grey lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
    <div
      v-else
      class="no-tasks"
    >
      <v-icon
        size="150"
        color="primary"
      >
        mdi-check
      </v-icon>
      <div
      class="pa-6 text-h5 primary--text"
      >
        You do not have any tasks!
      </div>
      
    </div>
  </div>
</template>

<script>
  

  export default {
    name: 'Home',
    data() {
      return {
        newTaskTitle: '',
        tasks:[
          // {
          //   id: 1,
          //   title: 'Wake Up',
          //   done: true
          // },
          // {
          //   id: 2,
          //   title: 'Eat Breakfast',
          //   done: false
          // },
          // {
          //   id: 3,
          //   title: 'Eat Bananas',
          //   done: true
          // }
        ]
      }
    },
    methods: {
      addTask() {
        let newTask = {
          id: Date.now(),
          title: this.newTaskTitle,
          done: false
        }
        this.tasks.push(newTask);
        this.newTaskTitle = '';
      },
      doneTask(id) {
        let task = this.tasks.filter(task => task.id === id)[0];
        task.done = !task.done;
      },
      deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        task.done = !task.done;
      }
    }
  }
</script>
<style>
  .no-tasks {
    position: absolute;
    text-align: center;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
  }
</style>