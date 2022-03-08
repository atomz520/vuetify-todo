<template> 
  <div class="home pa-6">
    <h1>To-do Page</h1>
    <list-tasks
      v-if="$store.state.tasks.length"
    />
    <no-tasks
      v-else 
    />
    <button-done-sorting
      v-if="$store.state.sorting"
    />
  </div>
</template>

<script>
import ButtonDoneSorting from '../components/Todo/ButtonDoneSorting.vue'
//import FieldAddTask from '@/components/Todo/FieldAddTask.vue'
  

  export default {
    name: 'Home',
    data() {
      return {
       
      }
    },
    methods: {
      
    },
    components: {
      'list-tasks': require('@/components/Todo/ListTasks.vue').default,
      'no-tasks': require('@/components/Todo/NoTasks.vue').default,
      'button-done-sorting': require('@/components/Todo/ButtonDoneSorting.vue').default
    }
  }
</script>
<style>

</style>