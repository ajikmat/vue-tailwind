<template>
  <div class="text-white pb-16">
    <p class="text-xl text-center">Simple To-Do List</p>
    <dialog id="my_modal_2" class="modal modal-bottom rounded-none">
      <form method="dialog" class="modal-box rounded-none">
        <h3 class="text-lg">Add New Task</h3>
        <div class="font-light">
          <div class="form-control w-full mb-4">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              v-model="task"
              type="text"
              required
              placeholder="Task name"
              class="input input-bordered w-full input-primary" />
          </div>
          <div class="form-control w-full mb-8">
            <label class="label">
              <span class="label-text">Description</span>
            </label>
            <input
              v-model="description"
              type="text"
              placeholder="Some description"
              class="input input-bordered w-full h-32 input-primary" />
          </div>

          <button class="btn btn-primary w-full" @click="() => addNewTask()">
            Submit
          </button>
        </div>
      </form>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>

    <div v-if="selectedTodo">
      <dialog id="my_modal_3" class="modal">
        <form method="dialog" class="modal-box rounded-none">
          <button
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>

          <TodoDetails
            :todo="selectedTodo"
            @buttonHandler="() => clickHandler(selectedTodo)" />
        </form>
      </dialog>
    </div>

    <div class="fixed bottom-4 right-4">
      <a
        href="#"
        class="btn btn-primary btn-lg rounded-full drop-shadow-lg"
        @click="() => openModal()">
        <i class="fas fa-plus"></i>
      </a>
    </div>

    <div
      v-for="todo in todos"
      :key="todo.id"
      @click="() => openModalTodoDetails(todo)"
      class="cursor-pointer card-compact shadow-lg bg-base-200 rounded-lg hover:bg-base-300">
      <div class="card-body m-4 hover:text-lg transition-all">
        <div class="flex justify-between">
          <div>{{ todo.task }}</div>
          <div class="checkbox checkbox-primary" :checked="todo.isFinished" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoDetails from '@/components/TodoDetails.vue';

export default {
  components: {
    TodoDetails,
  },
  methods: {
    clickHandler(todo) {
      console.log(todo.id);
      todo.isFinished = !todo.isFinished;

      const myModal3 = document.getElementById('my_modal_3');

      if (myModal3.open) {
        myModal3.close();
      }
    },
    addNewTask() {
      const todo = {
        task: this.task,
        description: this.description,
        isFinished: this.isFinished,
      };

      this.todos.push(todo);
      const myModal2 = document.getElementById('my_modal_2');
      myModal2.close();

      setTimeout(() => {
        this.task = '';
        this.description = '';
      }, 500);
    },
    openModal() {
      const myModal2 = document.getElementById('my_modal_2');
      myModal2.showModal();
    },
    openModalTodoDetails(todo) {
      this.selectedTodo = todo;

      setTimeout(() => {
        const myModal3 = document.getElementById('my_modal_3');

        myModal3.showModal();
      }, 50);
    },
  },
  data() {
    return {
      task: '',
      description: '',
      isFinished: false,
      selectedTodo: null,
      todos: [
        {
          task: 'Complete Project Proposal',
          description: 'Review and finalize the project proposal document',
          isFinished: false,
          id: 1,
        },
        {
          task: 'Prepare Presentation Slides',
          description: 'Create slides for the upcoming client presentation',
          isFinished: true,
          id: 2,
        },
        {
          task: 'Research New Technologies',
          description:
            'Explore and gather information on emerging technologies',
          isFinished: false,
          id: 3,
        },
        {
          task: 'Update Website Content',
          description: 'Revise and update the website content for improved SEO',
          isFinished: true,
          id: 4,
        },
        {
          task: 'Schedule Team Meeting',
          description: 'Coordinate a meeting to discuss project progress',
          isFinished: false,
          id: 5,
        },
      ],
    };
  },
};
</script>

<style></style>
