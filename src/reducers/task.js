import * as Types from '../constants/task';
import { toastErr, toastSuccess } from '../helpers/toastHelper';
const initialState = {
    listTask: [],
    listTaskFiler: [],
    taskEditing: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_TASK:
            return { ...state, listTask: [] };
        case Types.FETCH_TASK_SUCCESS:
            toastSuccess('Get data complete!');
            return { ...state, listTask: action.payload };
        case Types.FETCH_TASK_FALSE:
            toastErr('Network Error!');
            return { ...state, listTask: [] };
        case Types.FILTER_TAST_SUCCESS:
            return { ...state, listTask: action.payload.data };
        case Types.ADD_TASK:
            return { ...state, taskEditing: null };
        case Types.ADD_TASK_SUCCESS:
            const data = action.payload.data;
            return { ...state, listTask: state.listTask.concat([data]) };
        case Types.ADD_TASK_FALSE:
            toastErr('Add new false');
            return { ...state };
        case Types.TASK_EDITING:
            const {task} = action.payload;
            return { ...state, taskEditing: task};
        default: return state;
    }
};

export default reducer;
