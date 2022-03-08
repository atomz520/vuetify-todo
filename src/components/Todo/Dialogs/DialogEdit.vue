<template>
  <v-dialog
    :value="true"
    width="600px"
  >
    <v-card>
      <v-card-title>
        <span class="text-h5">Edit Task</span>
      </v-card-title>
      <v-card-text>
        Edit the title of this task
        <v-text-field 
          v-model="taskTitle"
          @keyup.enter="saveTask"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="$emit('close')"
        >
          Cancel
        </v-btn>
        <v-btn
          color="red"
          text
          @click="saveTask"
          :disabled="taskTitleInvalid"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['task'],
  data() {
    return{
      taskTitle: null
    }
  },
  mounted() {
    this.taskTitle = this.task.title
  },
  methods: {
    saveTask() {
      if (!this.taskTitleInvalid) {
        let payload = {
        id: this.task.id,
        title: this.taskTitle
      }
      this.$store.dispatch('updateTaskTitle', payload)
      this.$emit('close')
      this.$vuetify.goTo(0, { duration: 0 })
      }
    }
  },
  computed: {
    taskTitleInvalid() {
      return !this.taskTitle || this.taskTitle === this.task.title
    }
  }
}
</script>

<style>

</style>