import {API_ENDPOINT} from '../constants';
import AxiosService from '../commons/axiosService';

// http://localhost:3000/tasks
const url = 'task';
export const getListTask = () => {
    return AxiosService.get(`${API_ENDPOINT}/${url}`);
};

// http://localhost:3000/tasks METHOD: POST
export const addTask = (data) => {
    return AxiosService.post(`${API_ENDPOINT}/${url}`, data)
}

// http://localhost:3000/tasks/:id METHOD: PUT
export const editTask = (data) => {
    return AxiosService.put(`${API_ENDPOINT}/${url}/${data.id}`, data)
}

// http://localhost:3000/tasks/:id METHOD: DELETE
export const delTask = taskId => {
    return AxiosService.delete(`${API_ENDPOINT}/${url}/${taskId}`)
}