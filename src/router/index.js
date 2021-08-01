import { createWebHistory, createRouter } from 'vue-router';
// import login from '@/views/login.vue';
import dashboard from '@/views/dashboard.vue';
import character from '@/views/character.vue';
import mochibux from '@/views/mochibux.vue';
import notfound from '@/views/notfound.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: dashboard
  },
  {
    path: '/character',
    name: 'Character Sheet',
    component: character
  },
  {
    path: '/mochibux',
    name: 'MochiBux Ranking',
    component: mochibux
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: notfound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
