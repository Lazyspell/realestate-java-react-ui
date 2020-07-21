import {combineReducers} from 'redux';
import {City} from '../models/City';
import {County} from '../models/County';
import {House} from '../models/House';
import {NewUser} from '../models/NewUser';
import {Users} from '../models/User';
import { loginReducer} from './login-reducer'
import { registerReducer } from "./register-reducer";

export interface ILoginState {
    authUser: Users;
    errorMessage:string;
}

export interface IRegisterState {
    newUser: NewUser;
    errorMessage:string;

}


export interface IState{
    login: ILoginState;
    register: IRegisterState;
}


export const state = combineReducers<IState>({ 
    register: registerReducer,
    login: loginReducer
});