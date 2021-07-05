import {LOAD_PROFILE_FAILURE, LOAD_PROFILE_PENDING, LOAD_PROFILE_SUCCESS} from "../constants/actionTypes";

const initialState = {
    loading: false,
    id: "",
    name: "",
    alias: "",
    base: "",
    debutIn: "",
    debutOn: "",
    universe: {id: "", name: ""},
    links: {official: "", wikipedia: "", facebook: "", instagram: "", twitter: ""}
}

const profileReducer = (state= initialState, action) => {
    const finalState = Object.assign({}, state);

    switch (action.type) {
        case LOAD_PROFILE_PENDING: {
            finalState.loading = true;
            break;
        }
        case LOAD_PROFILE_FAILURE: {
            finalState.loading = false;
            break;
        }
        case LOAD_PROFILE_SUCCESS: {
            finalState.loading = false;
            finalState.id = action.payload.id;
            finalState.name = action.payload.name;
            finalState.alias = action.payload.alias;
            finalState.base = action.payload.base;
            finalState.debutIn = action.payload.debutIn;
            finalState.debutOn = action.payload.debutOn;
            finalState.universe = action.payload.universe;
            finalState.links = action.payload.links;
            break;
        }
    }

    return finalState;
};

export default profileReducer;
