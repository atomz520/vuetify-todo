<template>
  <div>
    <v-menu
            bottom
            left
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
      color="primary"
        icon
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        @click="handleClick(i)"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
  <dialog-edit 
    v-if="dialogs.edit" 
    :task="task"
    @close="dialogs.edit=false"  
  />
  <dialog-delete 
    v-if="dialogs.delete" 
    :task="task"
    @close="dialogs.delete=false"  
  />
  </div>
  
</template>

<script>
export default {
  props: ['task'],
  data: () => ({
    items: [
      { 
        title: 'Edit',
        icon: 'mdi-pencil',
        click() {
          console.log('edit')
          this.dialogs.edit = true
        }
      },
      { 
        title: 'Due date', 
        icon: 'mdi-calendar',
        click() {
          console.log('duedate')
        }
      },
      { 
        title: 'Delete',
        icon: 'mdi-delete',
        click() {
          console.log('delete')
          this.dialogs.delete = true
        }
      },
    ],
    dialogs: {
      edit: false,
      delete: false
    }
  }),
  methods: {
    handleClick(i) {
      this.items[i].click.call(this)
    }
  },
  components: {
    'dialog-edit': require('@/components/Todo/Dialogs/DialogEdit.vue').default,
    'dialog-delete': require('@/components/Todo/Dialogs/DialogDelete.vue').default
  }
}
</script>

<style>

</style>