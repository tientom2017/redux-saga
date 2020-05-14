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
            const dataTask = action.payload.data;
            return { ...state, listTask: state.listTask.concat([dataTask]) };
        case Types.ADD_TASK_FALSE:
            toastErr('Add new false');
            return { ...state };

        case Types.TASK_EDITING:
            const { task } = action.payload;
            return { ...state, taskEditing: task };
        case Types.EDIT_TASK:
            return { ...state };
        case Types.EDIT_TASK_SUCCESS:
            const { data } = action.payload;
            const { listTask } = state;
            const index = listTask.findIndex(item => item.id === data.id);
            if (index !== -1) {
                const newList = [
                    ...listTask.slice(0, index),
                    data,
                    ...listTask.slice(index + 1),
                ];
                toastSuccess('Cập nhật công việc thành công');
                return {
                    ...state,
                    listTask: newList,
                };
            }
        case Types.EDIT_TASK_FALSE:
            toastErr('Cập nhật công việc thất bại!');
            return { ...state };

        case Types.DEL_TASK:
            return { ...state };
        case Types.DEL_TASK_SUCCESS:
            console.log(action.payload);
            const id = action.payload.id;
            const newListTask = state.listTask.filter(item => item.id != id);
            toastSuccess('Xóa thành công');
            return { ...state, listTask: newListTask };
        case Types.DEL_TASK_FALSE:
            toastErr('Xoá công việc thất bại!');
            return { ...state };
        default: return state;
    }
};

export default reducer;
