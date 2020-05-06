import {API_ENDPOINT} from '../constants';
import AxiosService from '../commons/axiosService';

const url = 'task';
export const getListTask = () => {
    return AxiosService.get(`${API_ENDPOINT}/${url}`);
};
