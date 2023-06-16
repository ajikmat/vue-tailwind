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
    addTask(task) {
      this.todos.push(task);
    },
    changeStatus(id) {
      const taskId = this.todos.findIndex((todo) => todo.id === id);

      const currentStatus = this.todos[taskId].isFinished;
      this.todos[taskId].isFinished = !currentStatus;
    },
    deleteTask(id) {
      const taskId = this.todos.findIndex((todo) => todo.id === id);

      this.todos.splice(taskId, 1);
    },
  },
  state: () => ({
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
        description: 'Explore and gather information on emerging technologies',
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
  }),
});
