<template>
    <div class="dashboard">
        <component :is="MochibuxRanking"/>
    </div>
</template>

<script>
import MochibuxRanking from '../components/MochibuxRanking';
import { shallowRef } from 'vue';

export default {
    name: 'mochibux',
    data() {
        return {
            MochibuxRanking: shallowRef(MochibuxRanking)
        };
    }
}
</script>

<style scoped lang="scss">
</style>
