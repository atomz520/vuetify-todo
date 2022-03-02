<template> 
  <div class="home pa-6">
    <h1>To-do Page</h1>
    <field-add-task/>
    <list-tasks
      v-if="$store.state.tasks.length"
    />
    <no-tasks
      v-else 
    />
  </div>
</template>

<script>
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
      'field-add-task': require('@/components/Todo/FieldAddTask.vue').default,
      'list-tasks': require('@/components/Todo/ListTasks.vue').default,
      'no-tasks': require('@/components/Todo/NoTasks').default
    }
  }
</script>
<style>

</style>