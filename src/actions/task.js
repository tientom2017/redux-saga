import * as taskApi from '../apis/task';
import * as Types from '../constants/task';
import * as TypesStatus from '../constants/index';

export const fetListTask = () => {
    return {
        type: Types.FETCH_TASK,
    };
};

export const fetListTaskSuccess = (payload) => {
    return {
        type: Types.FETCH_TASK_SUCCESS,
        payload
    };
};

export const fetListTaskFalse = (err) => {
    return {
        type: Types.FETCH_TASK_FALSE,
        payload: {
            err
        }
    };
};

export const fetchListTaskRequest = () => {
    return dispatch => {
        dispatch(fetListTask());
        taskApi
            .getListTask()
            .then(data => {
                dispatch(fetListTaskSuccess(data));
            })
            .catch(err => {
                dispatch(fetListTaskFalse(err));
            });
    };
};

export const actFetchListTask = (products) => {
    return {
        type: Types.FETCH_TASK,
        products
    };
};

export const filterTask = keyword => {
    return {
        type: Types.FILTER_TAST,
        payload: {
            keyword
        }
    };
};

export const filterTaskSuccess = data => {
    return {
        type: Types.FILTER_TAST_SUCCESS,
        payload: {
            data
        }
    };
};

export const addTaskRequest = (title, description) => {
    return {
        type: Types.ADD_TASK,
        payload: {
            title,
            description,
            status: TypesStatus.STATUS[0].value
        }
    };
};

export const addTaskSuccess = data => {
    return {
        type: Types.ADD_TASK_SUCCESS,
        payload: {
            data
        }
    };
};

export const addTaskFalse = data => {
    return {
        type: Types.ADD_TASK_FALSE,
        payload: {
            data
        }
    };
};

export const taskEditing = task => {
    return {
        type: Types.TASK_EDITING,
        payload: {
            task
        }
    }
};

export const editTaskRequest = (id, title, description, status) => {
    return {
        type: Types.EDIT_TASK,
        payload: {
            id,
            title,
            description,
            status
        }
    };
};

export const editTaskSuccess = data => {
    return {
        type: Types.EDIT_TASK_SUCCESS,
        payload: {
            data
        }
    };
};

export const editTaskFalse = data => {
    return {
        type: Types.EDIT_TASK_FALSE,
        payload: {
            data
        }
    };
};

export const delTaskRequest = (id) => {
    return {
        type: Types.DEL_TASK,
        payload: {
            id
        }
    };
};

export const delTaskSuccess = id => {
    return {
        type: Types.DEL_TASK_SUCCESS,
        payload: {
            id
        }
    };
};

export const delTaskFalse = data => {
    return {
        type: Types.DEL_TASK_FALSE,
        payload: {
            data
        }
    };
};
