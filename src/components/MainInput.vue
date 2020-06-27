<template>
    <div>
        <input :type="type" :placeholder="placeholder"/>
    </div>
</template>

<script>
    export default {
        name: 'MainInput',

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
        &::placeholder {
            color: #fefefe;
        }
        &:focus {
            outline: none;
        }
    }
</style>
