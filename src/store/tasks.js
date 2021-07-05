import { INIT_DATA, SET_ITEM, STASH_DATA } from './mutation-types'

export default {
    namespaced: true,
    state: {
        data: []
    },
    getters: {
        getData(state) {
            return state.data;
        }
    },
    mutations: {
        [INIT_DATA](state, data) {
            const localOrgTasks = localStorage.org_tasks;

            if (typeof localOrgTasks !== "undefined") {
                state.data = JSON.parse(data);
            }
        },
        [SET_ITEM](state, item) {
            state.data.push(item);
        },
        [STASH_DATA](state) {
            localStorage.setItem('org_tasks', JSON.stringify(state.data));
        }
    }
}