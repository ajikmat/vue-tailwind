<template>
  <div class="font-LexendDeca">
    <AppBar></AppBar>

    <div class="p-4">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppBar from './components/AppBar.vue';
import { useTodoStore } from '@/stores/TodoStores';

export default {
  name: 'App',
  components: {
    AppBar,
  },
  mounted() {
    const todoStore = useTodoStore();

    todoStore.getTask();
  },
};
</script>
