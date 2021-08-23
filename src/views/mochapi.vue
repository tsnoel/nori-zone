<template>
    <nav-header page="MochApi Documentation"/>
    <iframe class="documentation-container" :src="source"></iframe>
</template>

<script>
import Nav from '../components/nav';

export default {
    name: 'notfound',
    components: {
        [Nav.name]: Nav
    },
    data() {
        return {
            source: 'https://nori.ngrok.io/mochapi/'//`${window.location.origin}/mochapi/`
        };
    }
}
</script>

<style scoped lang="scss">
.documentation-container {
    background-color: rgba(color(purple, lightdash), 0.8);
    border: 1px solid rgba(color(purple, lightdash), 0.6);
    border-radius: 1rem;
    height: calc(94% - 4.5rem);
    margin: 3%;
    overflow: scroll;
    width: calc(94% - 0.25rem);
}
</style>
