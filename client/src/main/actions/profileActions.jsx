import {LOAD_PROFILE_FAILURE, LOAD_PROFILE_PENDING, LOAD_PROFILE_SUCCESS} from "../constants/actionTypes";
import axios from "axios";

export function getProfilePending() {
    return {
        type: LOAD_PROFILE_PENDING
    }
}

export function getProfileFailure(payload) {
    return {
        type: LOAD_PROFILE_FAILURE
    }
}

export function getProfileSuccess(payload) {
    return {
        type: LOAD_PROFILE_SUCCESS,
        payload: payload
    }
}

export const getProfile = (id) => (
    dispatch => {
        dispatch(getProfilePending());
        return axios.get("/profiles/" + id)
            .then(response => {
                dispatch(getProfileSuccess(response.data));
            })
            .catch(err => {
                dispatch(getProfileFailure(err));
            })
    }
);
