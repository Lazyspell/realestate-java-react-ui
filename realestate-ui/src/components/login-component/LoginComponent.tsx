import React, {useState} from 'react';
import { Alert } from '@material-ui/lab';

import {loginAction} from '../../actions/login-action';

import { 
    Typography, 
    FormControl, 
    InputLabel, 
    Input, 
    Button, 
    makeStyles, 
    Divider,
    Paper
} from '@material-ui/core';

import { Redirect } from 'react-router';
import { Users } from '../../models/User';
import { NewUser } from '../../models/NewUser';


export interface ILoginProps {
    authUser: Users;
    errorMessage: string;
    loginAction: (username: string, password: string) => void;
    registerAction: (user: NewUser) => void;
}

const useStyles = makeStyles({
    loginContainer: {
        display: "flex",
        justifyContent: "center",
        margin: 20,
        marginTop: 40,
        padding: 20
    },
    loginForm: {
        width: "50%"
    },
    centerButton:
    {
        display: "flex",
        justifyContent: "center"
    }
});

const LoginComponent = (props: ILoginProps)=>{

    const classes = useStyles();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let updateForm = (e: any) =>{
        switch (e.currentTarget.id){
            case 'username':
                setUsername(e.currentTarget.value);
                break;
            case 'password':
                setPassword(e.currentTarget.value);
                break;
            default:
                console.warn(`Error binding: element with id: ${e.currentTarget.id}`);
        }
    }

    let login = async ()=>{
        props.loginAction(username, password);
    }

    let errorHandler = async (error: string) =>{
        console.error(error);
    }

    return (
        props.authUser ?
        <Redirect to ="/home" /> :
        <>
            <Paper className = {classes.loginContainer}>
                <form className = {classes.loginForm}>
                    <Typography align = "center" variant = "h4">Login to Real Estate Prediction</Typography>

                    <FormControl margin = "normal" fullWidth>
                        <InputLabel htmlFor = "username"> Username </InputLabel>
                        <Input 
                            onChange = {updateForm}
                            value = {username}
                            id = "username" type = "text"
                            placeholder = "Enter your username"/>
                    </FormControl>

                    <FormControl margin = "normal" fullWidth>
                        <InputLabel htmlFor = "password">Password</InputLabel>
                        <Input 
                            onChange = {updateForm}
                            value = {password}
                            id = "password" type = "password"
                            placeholder = "Enter your password"/>
                    </FormControl>

                    <br/><br/>
                    <Button onClick={login} variant="contained" color="secondary" size="medium">Login</Button>
                    <br/><br/>
                    
                    {
                        props.errorMessage
                        ?
                        <Alert severity = "error">{props.errorMessage}</Alert>
                        :
                        <></>
                    }
                </form>
            </Paper>
            </>
    );
}

export {LoginComponent};