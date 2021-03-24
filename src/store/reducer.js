import {actionType} from './action';
import uniqid from 'uniqid';

const getFilterTasks = (tasks, id) => {
    return tasks.filter((item) => item.id !== id);
}

const getNewTask = (tasks, value) => {
    const newItem = {label: value, important: false, done: false, id: uniqid()}
    const newTasks = [...tasks, newItem];
    return newTasks;
}

const changeDoneStatus = (tasks, id) => {
    return tasks.map((item) => item.id === id ? {...item, done: !item.done} : item);
}

const changeImportantTask = (tasks, id) => {
    return tasks.map((item) => item.id === id ? {...item, important: !item.important} : item);
}

const initialState = {
    tasks: [],
    searchFragment: '',
    statusFilter: 'All',
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.DEL_TASK:
            return {
                ...state,
                tasks: getFilterTasks(state.tasks, action.payload),
            };

        case actionType.ADD_TASK:
            return {
                ...state,
                tasks: getNewTask(state.tasks, action.payload),
            };

        case actionType.DONE_TASK:
            return {
                ...state,
                tasks: changeDoneStatus(state.tasks, action.payload),
            };

        case actionType.IMPORTANT_TASK:
            return {
                ...state,
                tasks: changeImportantTask(state.tasks, action.payload),
            };

        case actionType.SEARCH_TASK:
            return {
                ...state,
                searchFragment: action.payload,
            };

        case actionType.CHANGE_STATUS_FILTER:
            return {
                ...state,
                statusFilter: action.payload,
            }

        default:
            return state;
    }
};