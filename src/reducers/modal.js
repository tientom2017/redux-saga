import * as Types from '../constants/modal';

const initialState = {
    showModal: false,
    title: null,
    component: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SHOW_MODAL:
            return {
                ...state,
                showModal: true
            };
        case Types.HIDE_MODAL:
            return {
                ...state,
                showModal: false
            };
        case Types.CHANGE_MODAL_TITLE:
            const {title} = action.payload;
            return {
                ...state,
                title: title
            };
        case Types.CHANGE_MODAL_CONTENT:
            const {component} = action.payload;
            return {
                ...state,
                component: component
            };
        default:
            return state;
    }
};

export default reducer;
