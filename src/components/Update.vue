<template>
    <div id="login">
        <main-input
                :placeholder="name"
                type="text">
        </main-input>
        <main-input
                :placeholder="lastName"
                type="text">
        </main-input>
        <main-input
                :placeholder="email"
                error-message="Please enter a valid email"
                type="email">
        </main-input>
        <main-input
                :placeholder="password"
                error-message="Please enter at least 8 characters"
                type="password">
        </main-input>
        <main-input
                :placeholder="passwordConfirmation"
                error-message="Please enter at least 8 characters"
                type="password">
        </main-input>
    </div>
</template>

<script>
    import MainInput from './MainInput.vue';
    import CommonEnums from '../enums/CommonEnums';

    export default {
        name: 'Update',

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
