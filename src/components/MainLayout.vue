<template>
    <div id="mainLayout">
        <views></views>
        <component class="activeComponent" v-bind:is="selectedView"></component>
        <save-button></save-button>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Login from './Login.vue';
    import Register from './Register.vue';
    import Update from './Update.vue';
    import Views from './Views';
    import SaveButton from './SaveButton';

    export default {
        name: 'MainLayout',

        components: {
            SaveButton,
            Views,
            Login,
            Register,
            Update
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
        background-color: rgba(254, 254, 254, 0.4);
        border-radius: 10px;
        padding: 30px;
        flex-direction: column;
        .activeComponent {
            width: 80%;
        }
    }
</style>
