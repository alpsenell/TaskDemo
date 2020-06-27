<template>
    <div id="mainLayout">
        <div class="interface">
            <views></views>
            <component v-bind:is="selectedView"></component>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Login from './Login.vue';
    import Register from './Register.vue';
    import Views from './Views';

    export default {
        name: 'MainLayout',

        components: {
            Views,
            Login,
            Register
        },

        computed: {
            ...mapGetters('COMMON_STORE', {
                selectedView: 'getSelectedView'
            })
        }
    }
</script>

<style scoped lang="scss">
    #mainLayout {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
