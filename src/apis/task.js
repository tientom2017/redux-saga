import {API_ENDPOINT} from '../constants';
import AxiosService from '../commons/axiosService';

const url = 'task';
export const getListTask = () => {
    return AxiosService.get(`${API_ENDPOINT}/${url}`);
};

export const addTask = (data) => {
    return AxiosService.post(`${API_ENDPOINT}/${url}`, data)
}
