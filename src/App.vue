<template>
    <div id="app">
        <main-layout></main-layout>
    </div>
</template>

<script>
    import MainLayout from './components/MainLayout.vue'

    export default {
        name: 'App',
        components: {
            MainLayout
        }
    }
</script>

<style lang="scss">
    body {
        margin: 0;
        padding: 0;
        overflow: auto;
        background-color: #2c2b2c;
        #app {
            font-family: Avenir, Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-align: center;
        }
    }
</style>
