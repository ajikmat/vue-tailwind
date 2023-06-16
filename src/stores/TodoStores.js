import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todoStore', {
  getters: {
    completedTask: (state) => state.todos.filter((e) => e.isFinished),
    uncompletedTask: (state) => state.todos.filter((e) => !e.isFinished),
    allTask: (state) => state.todos,
    getTodoByID: (state) => {
      return (id) => state.todos.find((todo) => todo.id == id);
    },
    totalTask: (state) => state.todos.length,
  },
  actions: {
    async getTask() {
      this.isLoading = true;

      const res = await fetch(`http://localhost:3000/todos`);
      const data = await res.json();

      setTimeout(() => {
        this.todos = data;
        this.isLoading = false;
      }, 500);
    },
    async addTask(task) {
      this.todos.push(task);
      try {
        await fetch(`http://localhost:3000/todos`, {
          method: 'POST',
          body: JSON.stringify(task),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
    async changeStatus(id) {
      const taskId = this.todos.findIndex((todo) => todo.id === id);

      const currentStatus = this.todos[taskId].isFinished;
      this.todos[taskId].isFinished = !currentStatus;

      try {
        await fetch(`http://localhost:3000/todos/${id}`, {
          method: 'PATCH',
          body: JSON.stringify({
            isFinished: !currentStatus,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
    async deleteTask(id) {
      const taskId = this.todos.findIndex((todo) => todo.id === id);

      this.todos.splice(taskId, 1);

      try {
        await fetch(`http://localhost:3000/todos/${id}`, {
          method: 'DELETE',
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  state: () => ({
    todos: [],
    isLoading: false,
  }),
});
