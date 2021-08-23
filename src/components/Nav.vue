<template>
    <div class="nav-header">
        <span class="logo-container">
            <div class="icon-container" @click="navigate">
                <div class="icon-square">
                    <nori-icon class="logo-icon"/>
                </div>
            </div>
            <span class="logo-text" @click="navigate">nori</span>
            <span v-if="page" class="page-text">{{page}}</span>
        </span>
    </div>
</template>

<script>
import NoriIcon from '../assets/nori';

export default {
    name: 'nav-header',
    components: {
        'nori-icon': NoriIcon
    },
    props: {
        page: String
    },
    methods: {
        navigate() {
            this.$router.push('/');
        }
    }
}
</script>

<style scoped lang="scss">
.nav-header {
    background-color: rgba(color(purple, darkdash), 0.4);
    display: flex;
    flex-direction: row;
    height: 2.5rem;

    .logo-container {
        color: color(white);
        display: flex;
        flex-direction: row;

        .icon-container {
            cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0.25rem -0.5rem 0.25rem 1rem;
            width: 2.75rem;

            .icon-square {
                background-color: color(purple, darkdash);
                height: 1.75rem;
                width: 1.5rem;
            }

            .logo-icon {
                fill: color(white);
                height: 2.5rem;
                margin: -0.1rem 0 0 -0.45rem;
                width: 2.5rem;
            }
        }

        .logo-text {
            cursor: pointer;
            font-size: 1.5rem;
            margin: 0.2rem 0;
        }

        .page-text {
            border-left: 2px solid color(purple, dashboard);
            font-size: 0.8rem;
            margin: 0.7rem 0.5rem;
            padding: 0.05rem 0.5rem;
        }
    }
}
</style>
