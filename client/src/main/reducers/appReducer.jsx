import {LOAD_PROFILES_FAILURE, LOAD_PROFILES_PENDING, LOAD_PROFILES_SUCCESS} from "../constants/actionTypes";

const initialState = {
    albumList: null,
    albumListLoading: false
};

const appReducer = (state= initialState, action) => {
    const finalState = Object.assign({}, state);

    switch (action.type) {
        case LOAD_PROFILES_PENDING: {
            finalState.albumListLoading = true;
            break;
        }
        case LOAD_PROFILES_FAILURE: {
            finalState.albumListLoading = false;
            finalState.albumList = [];
            break;
        }
        case LOAD_PROFILES_SUCCESS: {
            finalState.albumListLoading = false;
            finalState.albumList = action.payload;
            break;
        }
    }

    return finalState;
};

export default appReducer;
