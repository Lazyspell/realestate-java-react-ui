import { Dispatch } from "redux"
import { loginActionTypes } from "./login-action";
import { logout } from "../remote/auth-service";
import { Users } from "../models/User";

export const logoutActionTypes = {
    SUCCESSFUL_LOGOUT: 'SUCCESSFUL_LOGOUT',
    INTERNAL_SERVER_ERROR: 'LOGOUT_INTERNAL_SERVER_ERROR'
}

export const logoutAction = () => async (dispatch: Dispatch) => {
    try {
        dispatch({
            type: logoutActionTypes.SUCCESSFUL_LOGOUT,
            //@ts-ignore
            payload: null as Users
        });

    } catch (e) {
        dispatch({
            type: logoutActionTypes.INTERNAL_SERVER_ERROR,
            payload: e.response.data.message
        })
    }
}
