<template>
    <div class="nav-header">
        <span class="logo-container">
            <div class="icon-container">
                <div class="icon-square">
                    <nori-icon class="logo-icon"/>
                </div>
            </div>
            <span class="logo-text">nori</span>
            <!--span class="page-text">{{page}}</span-->
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
    data() {
        return {
            page: ''
        };
    },
    beforeMount() {
        this.page = this.$router.currentRoute.value.name || 'Dashboard';
    }
}
</script>

<style scoped lang="scss">
.nav-header {
    background-color: rgba($primary, 0.25);
    display: flex;
    flex-direction: row;
    height: 2.5rem;

    .logo-container {
        color: $white;
        display: flex;
        flex-direction: row;

        .icon-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0.25rem -0.5rem 0.25rem 1rem;
            width: 2.75rem;

            .icon-square {
                background-color: $primary-dark;
                height: 1.75rem;
                width: 1.5rem;
            }

            .logo-icon {
                fill: $white;
                height: 2.5rem;
                margin: -0.1rem 0 0 -0.45rem;
                width: 2.5rem;
            }
        }

        .logo-text {
            font-size: 1.5rem;
            margin: 0.2rem 0;
        }

        .page-text {
            border-left: 2px solid $primary;
            font-size: 1rem;
            margin: 0.6rem 0.5rem;
            padding: 0 0.5rem;
        }
    }
}
</style>
