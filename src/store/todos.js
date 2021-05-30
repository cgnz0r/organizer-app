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
        initData(state, data) {
            const localOrgTodos = localStorage.org_todos;
            if (typeof localOrgTodos !== "undefined") {
                state.data = JSON.parse(data);
            }
        },
        setItem(state, item) {
            state.data.push(item);
        }
    },
    actions: {

    }
}