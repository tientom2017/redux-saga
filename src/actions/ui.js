import * as Types from '../constants/ui';

export const showLoadingGl = () => {
    return {
        type: Types.SHOW_LOADING
    };
};

export const hideLoadingGl = () => {
    return {
        type: Types.HIDE_LOADING
    };
};
