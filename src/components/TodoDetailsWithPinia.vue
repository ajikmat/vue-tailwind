<template>
  <div class="text-lg text-white">
    <div class="flex justify-between mb-10">
      <p class="mb-4">To-Do Details</p>

      <button
        class="btn btn-sm btn-square btn-secondary"
        @click="deleteHandler">
        <i class="fa-solid fa-trash" />
      </button>
    </div>

    <div class="p-4 bg-base-200">
      <div class="text-xs text-neutral-500">Task Name</div>
      <div class="text-sm mt-1 mb-4">{{ todo.task }}</div>
      <div class="text-xs text-neutral-500">Task Description</div>

      <div class="text-sm mt-1">
        {{ todo.description.length > 0 ? todo.description : 'No description' }}
      </div>
    </div>

    <button
      class="btn btn-primary w-full mt-8"
      @click="clickHandler"
      v-if="!todo.isFinished">
      Mark as Done
    </button>
    <button @click="clickHandler" v-else class="btn btn-primary w-full mt-8">
      Mark as Undone
    </button>
  </div>
</template>
<script>
import { useTodoStore } from '@/stores/TodoStores';
import { useRoute } from 'vue-router';

export default {
  name: 'TodoDetailsWithPinia',
  setup() {
    const todoStore = useTodoStore();

    const route = useRoute();
    const id = route.params.id;

    const todo = todoStore.getTodoByID(parseInt(id));
    console.log(todo);

    return { todo, todoStore, id };
  },
  data() {
    return {
      taskName: '',
      taskDescription: '',
      taskStatus: false,
    };
  },

  methods: {
    clickHandler() {
      this.todoStore.changeStatus(parseInt(this.id));
    },
    deleteHandler() {
      this.todoStore.deleteTask(parseInt(this.id));

      this.$router.back();
    },
  },
};
</script>
