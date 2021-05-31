import { INIT_DATA, SET_ITEM } from './mutation-types'

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
            const localOrgTodos = localStorage.org_todos;
            if (typeof localOrgTodos !== "undefined") {
                state.data = JSON.parse(data);
            }
        },
        [SET_ITEM](state, item) {
            state.data.push(item);
        }
    },
    actions: {

    }
}