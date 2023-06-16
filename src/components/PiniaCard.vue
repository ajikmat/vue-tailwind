<template>
  <div
    class="cursor-pointer card-compact shadow-lg bg-base-200 rounded-lg hover:bg-base-300">
    <router-link :to="{ name: 'pinia-details', params: { id: todo.id } }">
      <div class="card-body m-4 hover:text-lg transition-all">
        <div class="flex justify-between">
          <div>{{ todo.task }}</div>
          <div class="checkbox checkbox-primary" :checked="todo.isFinished" />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['todo'],
};
</script>
