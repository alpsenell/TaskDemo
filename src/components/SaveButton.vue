<template>
    <button
            class="button"
            :class="{ disable: anyErrors || isAnyInputEmpty }"
            @click="sendRequest">
        Save
    </button>
</template>

<script>
    import { mapGetters } from 'vuex';
    import ApiEnums from '../enums/ApiEnums';
    import CommonEnums from '../enums/CommonEnums';

    export default {
        name: 'SaveButton',

        computed: {
            ...mapGetters('COMMON_STORE', {
                selectedView: 'getSelectedView',
                userInputValues: 'getUserInputValues',
                anyErrors: 'isThereInputError'
            }),

            /**
             * @return {string}
             */
            selectedViewLowerCase () {
                return this.selectedView.toLowerCase();
            },

            /**
             * @return {boolean}
             */
            isAnyInputEmpty () {
                return Object.values(
                    this.userInputValues[this.selectedViewLowerCase]
                ).some( value => value === '');
            }
        },

        methods: {
            /**
             * @return {Promise<boolean>}
             */
            async sendRequest () {
                if (this.isAnyInputEmpty) {
                    return false;
                }

                if (this.selectedView === CommonEnums.LOGIN) {
                    await this.$http.post(
                        ApiEnums.LOGIN, this.userInputValues[this.selectedViewLowerCase]
                    );
                } else if (this.selectedView === CommonEnums.REGISTER) {
                    await this.$http.post(
                        ApiEnums.REGISTER, this.userInputValues[this.selectedViewLowerCase]
                    );
                } else if (this.selectedView === CommonEnums.UPDATE) {
                    await this.$http.post(
                        ApiEnums.USER_UPDATE, this.userInputValues[this.selectedViewLowerCase]
                    );
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .button {
        border-radius: 10px;
        border-style: none;
        outline: none;
        margin-top: 10px;
        padding: 10px 30px;
        cursor: pointer;
        &.disable {
            pointer-events: none;
            opacity: 0.6;
        }
    }
</style>
