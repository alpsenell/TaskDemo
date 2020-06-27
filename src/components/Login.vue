<template>
    <div id="login">
        <div class="forgotPassword">Forgot Password?</div>
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
    .forgotPassword {
        cursor: pointer;
        color: #fefefe;
        font-size: 12px;
        text-align: right;
    }
</style>
