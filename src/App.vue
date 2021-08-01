<template>
    <!-- Header -->
    <component :is="Nav"/>

    <div class="main-pane">
        <!-- Navigation Bar -->
        <el-menu
            class="main-menu"
            :default-active="$route.path"
            :router="true"
            @mouseover="isCollapse = false"
            @mouseleave="isCollapse = true"
            :collapse="isCollapse">
            <el-menu-item index="/">
                <v-icon class="menu-icon" scale="1.5" name="md-dashboard-round" />
                <template #title>Dashboard</template>
            </el-menu-item>
            <el-menu-item index="/character">
                <v-icon class="menu-icon" scale="1.5" name="fa-dice-d20" />
                <template #title>Character Sheet</template>
            </el-menu-item>
            <el-menu-item index="/mochibux">
                <v-icon class="menu-icon" scale="1.5" name="gi-podium" />
                <template #title>Mochibux Ranking</template>
            </el-menu-item>
        </el-menu>

        <!-- Current Page -->
        <router-view />
    </div>
</template>

<script>
import Nav from './components/Nav';
import { shallowRef } from 'vue';
import {
    ElMenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElSubmenu
} from 'element-plus';
import './styles/element-variables.scss';

export default {
    name: 'App',
    components: {
        'el-menu': ElMenu,
        'el-menu-item': ElMenuItem,
        'el-menu-item-group': ElMenuItemGroup,
        'el-submenu': ElSubmenu
    },
    data() {
        return {
            Nav: shallowRef(Nav),
            isCollapse: true
        };
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Roboto&display=swap');

html {
    height: 100%;
}

body {
    background-color: $base-color;
    font-family: 'Poppins', sans-serif;
    height: 100%;
    margin: 0;

    #app {
        height: 100%;
    }

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
