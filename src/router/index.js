import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import HomeWithPinia from '../views/HomeWithPinia.vue';
import TodoDetailsWithPinia from '../components/TodoDetailsWithPinia.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/pinia',
    name: 'pinia',
    component: HomeWithPinia,
  },
  {
    path: '/pinia-details/:id',
    name: 'pinia-details',
    component: TodoDetailsWithPinia,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
