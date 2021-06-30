import Vue from 'vue'
import Vuex, { StoreOptions} from 'vuex'
import { tasks } from './tasks'

import { SET_MODAL_OPENED_STATUS, SET_MODAL_CLOSED_STATUS } from './mutation-types'

import { IRootState } from './interfaces'

Vue.use(Vuex)

const store: StoreOptions<IRootState> = {
    state: {
        isModalOpened: false
    },
    getters: {
        getModalStatus(state) {
            return state.isModalOpened;
        }
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
};

export default new Vuex.Store<IRootState>(store);