<template>
    <nav-header page="Page Not Found"/>
    <div class="notfound">
        <div>
            <div class="large-text">404 :(</div>
            <div class="small-text">Page not found</div>
            <div class="small-text">
                Return to the <span class="link" @click="navigate">dashboard</span>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from '../components/nav';

export default {
    name: 'notfound',
    components: {
        [Nav.name]: Nav
    },
    methods: {
        navigate() {
            this.$router.push('/');
        }
    }
}
</script>

<style scoped lang="scss">
.notfound {
    color: white;
    display: flex;
    flex-direction: column;
    font-size: 3rem;
    height: calc(100% - 2.5rem);
    justify-content: space-around;
    text-align: center;

    .large-text {
        font-size: 4rem;
    }

    .small-text {
        font-size: 2rem;

        .link {
            color: color(purple, dashboard);
            cursor: pointer;
        }
    }
}
</style>
