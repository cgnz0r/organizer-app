// root
export interface IRootState {
    isModalOpened: boolean;
}

// tasks
export interface ITasksState {
    days: IDay[];
}

export interface ITask {
    id: string,
    title: string, 
    description: string,
    time: string,
    isCompleted: boolean;
}

export interface IDay {
    date: string;
    tasks: ITask[]
}