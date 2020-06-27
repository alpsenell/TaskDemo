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
        color: #264463;
        flex-grow: 1;
        &.activeView {
            color: #fafafa;
            border-bottom: 1px solid #fafafa;
        }
    }
</style>
