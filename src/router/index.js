import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@/views/simple-todo/HomeView.vue';
import HomeWithPinia from '../views/pinia/HomeWithPinia.vue';
import TodoDetailsWithPinia from '../views/pinia/TodoDetailsWithPinia.vue';
import PageView from '../views/pageview/PageView.vue';

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
  {
    path: '/page-view',
    name: 'page-view',
    component: PageView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
