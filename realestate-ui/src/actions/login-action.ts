import {userLogin} from '../remote/auth-service';
import {Users} from '../models/User';
import { Dispatch } from "redux";


export const loginActionTypes = {
	SUCCESSFUL_LOGIN: 'REI_APP_SUCCESSFUL_LOGIN',
	BAD_REQUEST: 'REI_APP_BAD_REQUEST',
	AUTHORIZATION_ERROR: 'REI_APP_AUTHORIZATION_ERROR',
    INVALID_CREDENTIALS: 'REI_APP_INVALID_CREDENTIALS',
    INTERNAL_SERVER_ERROR: 'REI_APP_INTERNAL_SERVER_ERROR',
}

export const loginAction = (username: string, password: string) => async (dispatch: Dispatch) => {
    
    try {
        //Missing Authenticate remote to connect to API
        let authUser = await userLogin(username, password);
        dispatch({
            type: loginActionTypes.SUCCESSFUL_LOGIN,
            payload: authUser
        });

    } catch (e) {

        let status = e.response.status;
        if (status === 400) {
            dispatch({
                type: loginActionTypes.BAD_REQUEST,
                payload: e.response.data.message
            });
        } else if (status === 401) {
            dispatch({
                type: loginActionTypes.INVALID_CREDENTIALS,
                payload: e.response.data.message
            });
        } else if (status === 403) {
            dispatch({
                type: loginActionTypes.AUTHORIZATION_ERROR,
                payload: e.response.data.message
            });
        } else {
            dispatch({
                type: loginActionTypes.INTERNAL_SERVER_ERROR,
                payload: e.response.data.message || 'Internal Server Error, connection failed!'
            });
        }

    }

}

