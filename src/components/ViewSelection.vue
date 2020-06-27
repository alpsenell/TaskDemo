<template>
    <span
            class="view"
            :class="{ activeView: isActive }"
            @click="setView(type)">
                {{ type }}
    </span>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'ViewSelection',

        props: {
            classes: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                required: true
            },
            isActive: {
                type: Boolean,
                required: true
            }
        },

        methods: {
            ...mapActions('COMMON_STORE', [
                'setSelectedView'
            ]),

            setView (type) {
                this.setSelectedView(type);
            }
        }
    }
</script>

<style scoped lang="scss">
    .view {
        margin: 0 10px;
        cursor: pointer;
        color: #2c2b2c;
        flex-grow: 1;
        &.activeView {
            color: #fefefe;
            border-bottom: 1px solid #fefefe;
        }
    }
</style>
