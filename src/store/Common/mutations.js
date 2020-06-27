import { Mutation } from './types';

export default {
    /**
     * @name setSelectedView
     * @param {object} state
     * @param {string} viewType
     */
    [Mutation.SET_SELECTED_VIEW] (state, viewType) {
        state.selectedView = viewType;
    },

    /**
     * @name setInputValue
     * @param {object} state
     * @param {{ viewType: string, inputValue: string, type: string }}
     */
    [Mutation.SET_INPUT_VALUE] (state, { viewType, inputValue, inputType }) {
        state[viewType][inputType] = inputValue;
    }
};
