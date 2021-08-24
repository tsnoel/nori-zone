<template>
    <nav-header page="MochApi Documentation"/>
    <div class="documentation-container">
        <iframe :src="source"></iframe>
    </div>
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
    background-color: color(white);
    height: calc(100% - 2.5rem);
    overflow: hidden;
    width: 100%;

    iframe {
        background-color: rgba(color(purple, lightdash), 0.7);
        border: 0;
        height: 100%;
        width: 100%;
    }
}
</style>
