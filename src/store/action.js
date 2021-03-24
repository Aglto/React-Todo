export const actionType = {
    DEL_TASK: `/delTask`,
    ADD_TASK: `/addTask`,
    DONE_TASK: `/doneTask`,
    IMPORTANT_TASK: `/importantTask`,
    SEARCH_TASK: `/searchTask`,
    CHANGE_STATUS_FILTER: `/changeStatusFilter`,
};

export const ActionCreator = {
    delTask: (id) => ({
        type: actionType.DEL_TASK,
        payload: id,
    }),
    addTask: (value) => ({
        type: actionType.ADD_TASK,
        payload: value,
    }),
    doneTask: (id) => ({
        type: actionType.DONE_TASK,
        payload: id,
    }),
    importantTask: (id) => ({
        type: actionType.IMPORTANT_TASK,
        payload: id,
    }),
    searchTask: (value) => ({
        type: actionType.SEARCH_TASK,
        payload: value,
    }),
    changeStatusFilter: (filter) => ({
        type: actionType.CHANGE_STATUS_FILTER,
        payload: filter,
    }),
};