import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import OhVueIcon from 'oh-vue-icons/dist/v3/icon.es';

import {
    GiPodium,
    FaDiceD20,
    FaMedal,
    MdDashboardRound
} from 'oh-vue-icons/icons';

OhVueIcon.add(
    GiPodium,
    FaDiceD20,
    FaMedal,
    MdDashboardRound
);

createApp(App).component('v-icon', OhVueIcon).use(router).mount('#app');
