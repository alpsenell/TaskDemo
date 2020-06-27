<template>
    <div id="login">
        <main-input
                :placeholder="name"
                type="text"
                name="name">
        </main-input>
        <main-input
                :placeholder="lastName"
                type="text"
                name="lastName">
        </main-input>
        <main-input
                :placeholder="email"
                error-message="Please enter a valid email"
                type="email"
                name="email">
        </main-input>
        <main-input
                :placeholder="password"
                error-message="Please enter at least 8 characters"
                type="password"
                name="password">
        </main-input>
        <main-input
                :placeholder="passwordConfirmation"
                error-message="Please enter at least 8 characters"
                type="password"
                name="passwordConfirmation">
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
