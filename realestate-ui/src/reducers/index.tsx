import {combineReducers} from 'redux';
import {City} from '../models/City';
import {County} from '../models/County';
import {House} from '../models/House';
import {NewUser} from '../models/NewUser';
import {Users} from '../models/User';
import { userReducer } from './login-reducer';

export interface IHomeState {
    currentUser: Users,
    loggedIn: boolean,
    loginMessage: string
}

export interface IState {
    userState: ILoginState,
    homeState: IHomeState
}

export interface ILoginState {
    currentUser: Users,
    loggedIn: boolean,
    loginMessage: string
}

export interface ILogoutState {
    currentUser: Users,
    loggedIn: boolean,
    loginMessage: string
}

export const state = combineReducers<IState>({
	userState: userReducer,
    homeState: userReducer
})