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
    async [Action.SET_SELECTED_VIEW] ({ commit }, viewType) {
        commit(Mutation.SET_SELECTED_VIEW, viewType);
    }
};
