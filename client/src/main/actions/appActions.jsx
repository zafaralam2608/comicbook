import {LOAD_PROFILES_FAILURE, LOAD_PROFILES_PENDING, LOAD_PROFILES_SUCCESS} from "../constants/actionTypes";
import axios from "axios";

export function getProfilesPending() {
    return {
        type: LOAD_PROFILES_PENDING
    }
}

export function getProfilesFailure(payload) {
    return {
        type: LOAD_PROFILES_FAILURE
    }
}

export function getProfilesSuccess(payload) {
    return {
        type: LOAD_PROFILES_SUCCESS,
        payload: payload
    }
}

export const getProfiles = () => (
    dispatch => {
        dispatch(getProfilesPending());
        return axios.get("/profile")
            .then(response => {
                dispatch(getProfilesSuccess(response.data));
            })
            .catch(err => {
                dispatch(getProfilesFailure(err));
            })
    }
);
