<template>
    <div>
        <input
                @keyup="validate"
                v-model="inputValue"
                :type="type"
                :name="name"
                :placeholder="placeholder"/>
        <p v-if="errors.length > 0" class="errorInput">{{ errorMessage }}</p>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'MainInput',

        data () {
            return {
                errors: [],
                inputValue: '',
                regEx: {
                    text: /^[a-z ,.'-]+$/g,
                    password: /^(?=.*[a-z]).{8,}$/g,
                    email: /^\w+([.-]?\w+)+@\w+([.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/g
                }
            }
        },

        props: {
            /**
             * @property {string} placeholder
             */
            placeholder: {
                type: String,
                default: ''
            },
            /**
             * @property {string} type
             */
            type: {
                type: String,
                default: 'text'
            },
            /**
             * @property {string} name
             */
            name: {
                type: String
            },
            /**
             * @property {string} errorMessage
             */
            errorMessage: {
                type: String,
                default: 'Please enter a valid value!'
            }
        },

        computed: {
            ...mapGetters('COMMON_STORE', {
                selectedView: 'getSelectedView'
            }),

            /**
             * @return {string}
             */
            selectedViewLowerCase () {
                return this.selectedView.toLowerCase();
            }
        },

        methods: {
            ...mapActions('COMMON_STORE',[
                'setInputValue',
                'setInputError'
            ]),

            /**
             * @return {void}
             */
            validate () {
                const isErrorPresent = this.inputValue.match(this.regEx[this.type]) === null;

                if (isErrorPresent) {
                    this.errors.push('error');

                    this.setInputError(true);
                } else {
                    this.errors = [];
                    this.setInputError(false);

                    this.setInputValue({
                        viewType: this.selectedViewLowerCase,
                        inputValue: this.inputValue,
                        inputType: this.name
                    })
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    input {
        font-size: 16px;
        background-color: transparent;
        border: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        border-bottom: 1px solid #fefefe;
        color: #fefefe;
        height: 40px;
        width: 100%;
        margin: 10px 0;
        &::placeholder {
            color: #fefefe;
        }
        &:focus {
            outline: none;
        }
    }
    .errorInput {
        color: #af2727;
        margin: 0;
    }
</style>
