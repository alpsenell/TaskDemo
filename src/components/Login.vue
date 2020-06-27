<template>
    <div id="login">
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
                email: CommonEnums.EMAIL,
                password: CommonEnums.PASSWORD
            }
        }
    }
</script>

<style scoped lang="scss">
</style>
