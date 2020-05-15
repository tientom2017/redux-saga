import * as Types from '../constants/ui';
const initialState = {
    isShowLoading: false,
    isToggleSideBar: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SHOW_LOADING:
            return {
                state, isShowLoading: true
            };
        case Types.HIDE_LOADING:
            return {
                state, isShowLoading: false
            };
        case Types.TOGGLE_SIDEBAR:
            return {
                ...state, isToggleSideBar: !state.isToggleSideBar
            };
        default: return state;
    }
};

export default reducer;
