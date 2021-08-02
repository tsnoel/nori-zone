import { createWebHistory, createRouter } from 'vue-router';

import dashboard from '@/views/dashboard.vue';
import mochibux from '@/views/mochibux.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: dashboard
  },
  {
    path: '/mochibux',
    name: 'MochiBux Ranking',
    component: mochibux
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
