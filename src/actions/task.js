import * as taskApi from '../apis/task';
import * as Types from '../constants/task';

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

export const addTaskRequest = (title, desc, email) => {
    return {
        type: Types.ADD_TASK,
        payload: {
            title,
            desc,
            email
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

