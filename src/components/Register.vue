<template>
    <div id="login">
        <main-input
                :placeholder="name">
        </main-input>
        <main-input
                :placeholder="lastName">
        </main-input>
        <main-input
                :placeholder="email">
        </main-input>
        <main-input
                :placeholder="password"
                type="password">
        </main-input>
        <main-input
                :placeholder="passwordConfirmation"
                type="password">
        </main-input>
    </div>
</template>

<script>
    import MainInput from './MainInput.vue';
    import CommonEnums from '../enums/CommonEnums';

    export default {
        name: 'Register',

        components: {
            MainInput
        },

        data () {
            return {
                name: CommonEnums.NAME,
                lastName: CommonEnums.LAST_NAME,
                email: CommonEnums.EMAIL,
                password: CommonEnums.PASSWORD,
                passwordConfirmation: CommonEnums.PASSWORD_CONFIRMATION
            }
        }
    }
</script>

<style scoped lang="scss">
</style>
