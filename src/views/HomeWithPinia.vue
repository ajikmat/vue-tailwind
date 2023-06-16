<template>
  <div class="text-white pb-16">
    <div class="text-xl text-center">
      <p>To-Do List</p>
      <p class="text-sm mt-2">With Pinia State Management</p>
    </div>
    <dialog id="add_task" class="modal modal-bottom rounded-none">
      <form method="dialog" class="modal-box rounded-none">
        <h3 class="text-lg">Add New Task</h3>
        <div class="font-light">
          <form @submit.prevent="addNewTask">
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

            <button class="btn btn-primary w-full">Submit</button>
          </form>
        </div>
      </form>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>

    <div class="flex pt-4 justify-center items-center">
      <div class="tabs tabs-boxed">
        <a
          class="tab"
          :class="{ 'tab-active': activeTab === 'all' }"
          @click="() => setActiveTab('all')">
          All Task
        </a>
        <a
          class="tab"
          :class="{ 'tab-active': activeTab === 'completed' }"
          @click="() => setActiveTab('completed')">
          Completed
        </a>
        <a
          class="tab"
          :class="{ 'tab-active': activeTab === 'uncompleted' }"
          @click="() => setActiveTab('uncompleted')">
          Uncompleted
        </a>
      </div>
    </div>

    <div class="fixed bottom-4 right-4">
      <a
        class="btn btn-primary btn-lg rounded-full drop-shadow-lg"
        @click="() => openModal()">
        <i class="fas fa-plus"></i>
      </a>
    </div>

    <div v-if="todoStore.totalTask >= 1">
      <div v-if="activeTab === 'uncompleted'">
        <div
          v-for="todo in todoStore.uncompletedTask"
          :key="todo.id"
          class="cursor-pointer card-compact shadow-lg bg-base-200 rounded-lg hover:bg-base-300">
          <router-link :to="{ name: 'pinia-details', params: { id: todo.id } }">
            <div class="card-body m-4 hover:text-lg transition-all">
              <div class="flex justify-between">
                <div>{{ todo.task }}</div>
                <div
                  class="checkbox checkbox-primary"
                  :checked="todo.isFinished" />
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <div v-if="activeTab === 'completed'">
        <div
          v-for="todo in todoStore.completedTask"
          :key="todo.id"
          class="cursor-pointer card-compact shadow-lg bg-base-200 rounded-lg hover:bg-base-300">
          <router-link :to="{ name: 'pinia-details', params: { id: todo.id } }">
            <div class="card-body m-4 hover:text-lg transition-all">
              <div class="flex justify-between">
                <div>{{ todo.task }}</div>
                <div
                  class="checkbox checkbox-primary"
                  :checked="todo.isFinished" />
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <div v-if="activeTab === 'all'">
        <div
          v-for="todo in todoStore.allTask"
          :key="todo.id"
          class="cursor-pointer card-compact shadow-lg bg-base-200 rounded-lg hover:bg-base-300">
          <router-link :to="{ name: 'pinia-details', params: { id: todo.id } }">
            <div class="card-body m-4 hover:text-lg transition-all">
              <div class="flex justify-between">
                <div>{{ todo.task }}</div>
                <div
                  class="checkbox checkbox-primary"
                  :checked="todo.isFinished" />
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div v-else class="text-center pt-10">
      <div>
        <i class="fa-solid fa-plane-departure text-4xl text-primary mb-2"></i>
        <p>No task at the moment</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useTodoStore } from '@/stores/TodoStores';

export default {
  setup() {
    const todoStore = useTodoStore();

    return { todoStore };
  },
  components: {},
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
        id: parseInt(Math.random() * 10000),
      };

      this.todoStore.addTask(todo);

      const myModal2 = document.getElementById('add_task');
      myModal2.close();

      setTimeout(() => {
        this.task = '';
        this.description = '';
      }, 500);
    },
    openModal() {
      const myModal2 = document.getElementById('add_task');
      myModal2.showModal();
    },
    setActiveTab(tab) {
      this.activeTab = tab;
    },
  },
  data() {
    return {
      task: '',
      description: '',
      isFinished: false,
      selectedTodo: null,
      activeTab: 'all',
    };
  },
};
</script>
