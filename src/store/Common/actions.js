import { Action, Mutation } from './types';

/**
 * @typedef {function} VuexAction
 * @type {object}
 */
export default {
    /**
     * @name setSelectedView
     * @param {function} [commit]
     * @param {String} viewType
     */
    [Action.SET_SELECTED_VIEW] ({ commit }, viewType) {
        commit(Mutation.SET_SELECTED_VIEW, viewType);
    },

    /**
     * @name setInputValue
     * @param {function} [commit]
     * @param {object} data
     */
    [Action.SET_INPUT_VALUE] ({ commit }, data) {
        commit(Mutation.SET_INPUT_VALUE, data)
    },

    /**
     * @name setInputError
     * @param {function} [commit]
     * @param {boolean} isErrorPresent
     */
    [Action.SET_INPUT_ERROR] ({ commit }, isErrorPresent) {
        commit(Mutation.SET_INPUT_ERROR, isErrorPresent)
    }
};
