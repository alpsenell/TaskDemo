import { Mutation } from './types';

export default {
    /**
     * @name setSelectedView
     * @param {object} state
     * @param {string} viewType
     */
    [Mutation.SET_SELECTED_VIEW] (state, viewType) {
        state.selectedView = viewType;
    }
};
