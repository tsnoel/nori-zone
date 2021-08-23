import { createWebHashHistory, createRouter } from 'vue-router';

import dashboard from '@/views/dashboard.vue';
import mochapi from '@/views/mochapi.vue';
import mochibux from '@/views/mochibux.vue';
import notfound from '@/views/notfound.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: dashboard
  },
  {
    path: '/mochapi',
    name: 'MochApi Documentation',
    component: mochapi
  },
  {
    path: '/mochibux',
    name: 'MochiBux Ranking',
    component: mochibux
  },
  {
    path: '/404',
    name: 'Not Found',
    component: notfound
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
