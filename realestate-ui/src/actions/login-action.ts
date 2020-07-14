import {userLogin} from '../remote/auth-service';
import {Users} from '../models/User';

export const loginTypes = {
	SUCCESSFUL_LOGIN: 'REI_APP_SUCCESSFUL_LOGIN',
    BAD_REQUEST: 'REI_APP_BAD_REQUEST',
    INVALID_CREDENTIALS: 'REI_APP_INVALID_CREDENTIALS',
    INTERNAL_SERVER_ERROR: 'REI_APP_INTERNAL_SERVER_ERROR',
    SUCCESSFUL_LOGOUT: 'REI_APP_SUCCESSFUL_LOGOUT'
}

export const login = (username: string, password: string, action: string) => async (dispatch: any) =>{
	// Use this commented block to skip login:

    // let currentUser = new AppUser(1, "test", "password", 1, ['Admin']);

    // if (action == "login") {
    //     console.log(currentUser);
    //     dispatch({
    //         type: loginTypes.SUCCESSFUL_LOGIN,
    //         payload: {
    //             currentUser: currentUser,
    //             loginMessage: ""
    //         }
    //     });
    // } else if (action = "logout") {
    //     dispatch({
    //         type: loginTypes.SUCCESSFUL_LOGOUT,
    //         payload: {
    //             currentUser: null,
    //             loginMessage: ""
    //         }
    //     });
    //     window.location.reload(true);
	// }
	
	try{
		if(action == "login"){
			let authUser = await userLogin(username, password);
			dispatch({
				type: loginTypes.SUCCESSFUL_LOGIN,
				payload: {
					currentUser: authUser,
					loginMessage: ""
				}
			});
		} else if(action = "logout"){
			dispatch({
				type: loginTypes.SUCCESSFUL_LOGOUT,
				payload:{
					currentUser: null,
					loginMessage: ""
				}
			});
		}
	} catch(e){
		let status = e.response?.status;
		if(status === 400){
			dispatch({
				type: loginTypes.BAD_REQUEST,
				payload: e.response?.data.message
			});
		} else if(status === 401){
			dispatch({
				type: loginTypes.INVALID_CREDENTIALS,
				payload: e.response?.data.message
			});
		} else{
			dispatch({
				type: loginTypes.INTERNAL_SERVER_ERROR,
				payload: e.response?.data.message || 'Error: Server could not be reached'
			});
		}
	}
}

