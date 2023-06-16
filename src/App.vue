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

export default {
  name: 'App',
  components: {
    AppBar,
  },
};
</script>
