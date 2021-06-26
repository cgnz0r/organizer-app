import Vue from 'vue'
import Vuex from 'vuex'
import tasks from './tasks'

import { SET_MODAL_OPENED_STATUS, SET_MODAL_CLOSED_STATUS } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isModalOpened: false
    },
    mutations: {
        [SET_MODAL_OPENED_STATUS](state) {
            state.isModalOpened = true;
        },
        [SET_MODAL_CLOSED_STATUS](state) {
            state.isModalOpened = false;
        }
    },
    modules: {
        tasks
    }
});
