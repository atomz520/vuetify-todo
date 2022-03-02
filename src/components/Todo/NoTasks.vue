<template>
  <div
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
</template>

<script>
export default {

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