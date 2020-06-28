<template>
    <div id="mainLayout">
        <div class="designView">
            <div class="logo"></div>
            <p>Welcome!</p>
        </div>
        <div class="interactionView">
            <views></views>
            <component class="activeComponent" v-bind:is="selectedView"></component>
            <save-button></save-button>
        </div>
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
        min-height: 600px;
        max-width: 1200px;
        width: 80%;
        display: flex;
        border-radius: 10px;
        overflow: hidden;
        .designView {
            width: 50%;
            background-image: url('../assets/loginScreenImage.jpg');
            background-size: cover;
            position: relative;
            .logo {
                background-image: url('../assets/companyLogo.png');
                background-size: contain;
                background-position: center;
                height: 100px;
                width: 95px;
                background-repeat: no-repeat;
                position: absolute;
                top: 30%;
                right: 50px;
                transform: translateY(-30%);
            }
            p {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 50px;
                color: #264463;
                margin: 0;
                font-size: 24px;
                font-weight: bold;
            }
        }
        .interactionView {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #ea482c;
            padding: 30px;
            flex-direction: column;
            flex-grow: 1;
            .activeComponent {
                width: 80%;
            }
        }
    }
</style>
