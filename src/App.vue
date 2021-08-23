<template>
    <div class="app-container">
        <!-- Current Page -->
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {};
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
    background-color: color(charcoal, dark);
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
}
</style>
