<template>
  <div class="text-lg text-white">
    <p class="mb-4">To-Do Details</p>

    <div class="p-4 bg-base-200">
      <div class="text-xs text-neutral-500">Task Name</div>
      <div class="text-sm mt-1 mb-4">{{ todo.task }}</div>
      <div class="text-xs text-neutral-500">Task Description</div>
      <div class="text-sm mt-1">{{ todo.description }}</div>
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
export default {
  props: ['todo'],
  emits: ['buttonHandler'],
  methods: {
    clickHandler() {
      console.log('test');
      this.$emit('buttonHandler');
    },
  },
};
</script>
