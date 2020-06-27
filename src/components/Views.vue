<template>
    <div id="views">
        <view-selection
                v-for="view in views"
                :key="view.type"
                :type="view.type"
                :is-active="selectedView === view.type">
        </view-selection>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import ViewSelection from './ViewSelection';
    import CommonEnums from '../enums/CommonEnums';

    export default {
        name: 'Views',

        components: {
            ViewSelection
        },

        computed: {
            ...mapGetters('COMMON_STORE', {
                selectedView: 'getSelectedView'
            })
        },

        data () {
            return {
                views: {
                    login: {
                        type: CommonEnums.LOGIN
                    },
                    register: {
                        type: CommonEnums.REGISTER
                    },
                    update: {
                        type: CommonEnums.UPDATE
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    #views {
        display: flex;
        margin-bottom: 50px;
        width: 100%;
    }
</style>
