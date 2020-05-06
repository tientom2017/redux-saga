import { toast } from 'react-toastify';

export const toastErr = err => {
    let message = null;
    if(err) {
        message = err;
    }
    if(message && message != null && message != 'undefined') {
        toast.error(message);
    }
    return message;
};

export const toastSuccess = mess => {
    let message = null;
    if(mess && mess != null && mess != 'undefined') {
        message = mess;
        toast.success(message);
    }
    return message;
};
