import * as Types from '../constants/task';
import { toastErr, toastSuccess } from '../helpers/toastHelper';
const initialState = {
    listTask: [],
    listTaskFiler: []
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
            console.log(action);
            return { ...state, listTask: action.payload.data };
        case Types.FILTER_TAST_SUCCESS:
            return { ...state, listTask: action.payload.data };
        case Types.FILTER_TAST_SUCCESS:
            return { ...state, listTask: action.payload.data };
        default: return state;
    }
};

export default reducer;
