<template>
  <v-dialog
    :value="true"
    width="600px"
  >
    <v-card>
      <v-card-title>
        <span class="text-h5">Delete Task?</span>
      </v-card-title>
      <v-card-text>
        Are you sure you want to delete this task?
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="$emit('close')"
        >
          No
        </v-btn>
        <v-btn
          color="red"
          text
          @click="$store.dispatch('deleteTask', task.id)"
        >
          Yes
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['task']
}
</script>

<style>

</style>