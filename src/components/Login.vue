<template>
    <div id="login">
        <main-input
                :placeholder="username">
        </main-input>
        <main-input
                :placeholder="password"
                type="password">
        </main-input>
    </div>
</template>

<script>
    import MainInput from './MainInput.vue';
    import CommonEnums from '../enums/CommonEnums';

    export default {
        name: 'Login',

        components: {
            MainInput
        },

        data () {
            return {
                username: CommonEnums.USERNAME,
                password: CommonEnums.PASSWORD
            }
        }
    }
</script>

<style scoped lang="scss">
</style>
