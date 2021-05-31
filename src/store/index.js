import Vue from 'vue'
import Vuex from 'vuex'
import todos from './todos'

import { TOGGLE_MODAL } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isModalOpened: false
    },
    mutations: {
        [TOGGLE_MODAL](state) {
            state.isModalOpened = !state.isModalOpened;
        }
    },
    modules: {
        todos
    }
});
