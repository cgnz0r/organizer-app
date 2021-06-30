import { Module } from 'vuex';
import { IDay, IRootState, ITask, ITasksState } from './interfaces';
import { INIT_DATA, ADD_TASK, STASH_DATA } from './mutation-types'

export const tasks: Module<ITasksState, IRootState> = {
    namespaced: true,
    state: {
        days: []
    },
    getters: {
        /**
         * Returns days array from store
         * @returns {IDay[]} days array from store
         */
        getData(state: ITasksState): IDay[] {
            return state.days;
        },

        /**
         * Returns tasks array by the day
         * @param {string} date with format DD.MM.YYYY
         * @returns {ITask[]} tasks array of the day
         */
        getDayData(state: ITasksState, date: string): ITask[] {
            const day = state.days.find(currDay => currDay.date === date);

            return day && day.tasks || [];
        }
    },
    mutations: {
        /**
         * Initializes store data from local storage
         */
        [INIT_DATA](state: ITasksState): void {
            const localOrgTasks = localStorage.org_tasks;

            if (typeof localOrgTasks !== "undefined") {
                state.days = JSON.parse(localOrgTasks);
            }
        },

        /**
         * Adds task by date
         * @param {string} date with format DD.MM.YYYY
         * @param {ITask} task 
         */
        [ADD_TASK](state: ITasksState, date: string, task: ITask): void {
            const currDay = state.days.find(currDay => currDay.date === date);

            currDay && currDay.tasks.push(task);
        },

        /**
         * Stashes store data to local storage
         */
        [STASH_DATA](state: ITasksState): void {
            localStorage.setItem('org_tasks', JSON.stringify(state.days));
        }
    }
}