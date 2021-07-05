import { INIT_DATA, ADD_TASK, STASH_DATA } from './mutation-types'

export default {
    namespaced: true,
    state: {
        days: []
    },
    getters: {
        getData(state) {
            return state.days;
        },
        getDayData(state, date) {
            const day = state.days.find(currDay => currDay.date === date);

            return day && day.tasks || [];
        }
    },
    mutations: {
        [INIT_DATA](state) {
            const localOrgTasks = localStorage.org_tasks;

            console.log("tasks store :: init data : localOrgTasks", localOrgTasks);
            
            if (typeof localOrgTasks !== "undefined") {
                state.days = JSON.parse(localOrgTasks);
            }
        },
        [ADD_TASK](state, { date, task }) {
            const currDay = state.days.find(currDay => currDay.date === date);

            if (currDay) {
                currDay.tasks.push(task);
            } else {
                state.days.push({ date, tasks: [task] });
            }
        },
        [STASH_DATA](state) {
            alert("tasks store :: stash data : data b4 stash", state.days);

            localStorage.setItem('org_tasks', JSON.stringify(state.days));

            alert("tasks store :: stash data : LS after stash", localStorage.org_tasks);
        }
    }
}