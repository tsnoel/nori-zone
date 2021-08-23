<template>
    <nav-header page="MochiBux Leaderboard"/>
    <div class="dashboard">
        <component :is="MochibuxRanking"/>
    </div>
</template>

<script>
import MochibuxRanking from '../components/MochibuxRanking';
import { shallowRef } from 'vue';

import Nav from '../components/nav';

export default {
    name: 'mochibux',
    components: {
        [Nav.name]: Nav
    },
    data() {
        return {
            MochibuxRanking: shallowRef(MochibuxRanking)
        };
    }
}
</script>

<style scoped lang="scss">
</style>
