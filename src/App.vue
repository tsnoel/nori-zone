<template>
    <div class="app-container">
        <!-- Header -->
        <component :is="Nav"/>

        <!-- Current Page -->
        <router-view />
    </div>
</template>

<script>
import Nav from './components/Nav';
import { shallowRef } from 'vue';

export default {
    name: 'App',
    data() {
        return {
            Nav: shallowRef(Nav)
        };
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Roboto&display=swap');

html,
body,
#app,
.app-container {
    height: 100%;
}

body {
    background-color: $base-color;
    font-family: 'Poppins', sans-serif;
    margin: 0;

    button, 
    input, 
    select, 
    textarea {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        color: inherit;
    }

    .main-pane {
        display: flex;
        flex-direction: row;
        height: calc(100% - 4rem);

        .main-menu {
            background-color: rgba($primary, 0.25);
            border: 0;
            color: $primary-text;

            &.el-menu--collapse {
                min-width: 4rem;
            }

            .el-menu-item {
                color: $primary-text;

                &.is-active {
                    color: $secondary;
                    background-color: rgba($primary, 0.25);
                }

                &:hover {
                    background-color: rgba($primary, 0.5);
                }

                .menu-icon {
                    margin: 0.75rem 1rem 0 -0.25rem;
                }
            }
        }
    }
}
</style>
