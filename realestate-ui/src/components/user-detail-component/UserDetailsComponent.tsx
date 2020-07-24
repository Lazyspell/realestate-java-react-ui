import React, {useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import {Users} from '../../models/User';
import { Grid, FormControl, InputLabel, Input, Card, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import { getUserById } from '../../remote/user-service';
import classes from '*.module.css';

export interface IUserDetailsProps{ 

}

const useStyles = makeStyles({
	registerContainer:{
		display: "flex",
		justifyContent: "center",
		margin: 20,
		marginTop: 40,
		padding: "5%"
	},
	registerForm:{
		width: "50%"
	}
});


export function UserDetailsComponent(props: IUserDetailsProps){
	const classes = useStyles();

	//@ts-ignore
	const [user, setUser] = useState<Users>(null as Users);
	const [editing, setEditing] = useState(false);
	const [userIdState, setUserId] = useState(user?.user_id)
	const [firstNameState, setFirstName] = useState(user?.first_name);
	const [lastNameState, setLastName] =  useState(user?.last_name);
	const [usernameState, setUsername] = useState(user?.username);
	const [emailState, setEmail] = useState(user?.email);
	const [userRoleState, setRole] = useState(user?.role);


	const enableEdit = () =>{
		setEditing(true);
	}

	const save = ()=>{
		setUser({
			...user,
			user_id: userIdState,
			first_name: firstNameState,
			last_name: lastNameState,
			email: emailState,
			username: usernameState,
			role: userRoleState
		});
		setEditing(false);
	}

	const cancel = () => {
        setEditing(false);
    }

	const setInfo = (event: any) =>{
		switch(event.target.id){
			case "firstName":
				setFirstName(event.target.value);
				break;
			case "lastName":
				setLastName(event.target.value);
				break;
			case "email":
				setEmail(event.target.value);
				break;
			case "username":
				setUsername(event.target.value);
				break;
			case "role":
				setRole(event.target.value);
				break;
		}
	}

	const getUser = async (id: number) =>{
		console.log(id)
		let thisUser = (await getUserById(id));
		console.log(thisUser)
		setUser(thisUser)
	}


	useEffect(()=>{
		let userId = window.location?.pathname?.match(/\d+/)?.pop()
		//@ts-ignore
		getUser(userId)
	}, [])

	

	return (
		<>
			<div>
			<Paper className = {classes.registerContainer}>
				<form className = {classes.registerForm}>
					<Typography align = "center" variant = "h4"> Update User</Typography>
					<FormControl margin = "normal" fullWidth>
						<InputLabel htmlFor = "firstName"></InputLabel>
						{
						editing ?
						<Input id = "firstName" defaultValue = {user?.first_name} disabled = {!editing} onChange = {setInfo} inputProps = {{'aria-label': 'description'}}/>:
						<Input id = "firstName" value = {user?.first_name} disabled = {!editing} onChange = {setInfo} inputProps = {{'aria-label': 'description'}}/>}
					</FormControl>

					<FormControl margin = "normal" fullWidth>
						<InputLabel htmlFor = "lastName"></InputLabel>
						{
						editing ?
						<Input id = "lastName" defaultValue = {user?.last_name} disabled = {!editing} onChange = {setInfo} inputProps = {{'aria-label': 'description'}}/>:
						<Input id = "lastName" value = {user?.last_name} disabled = {!editing} onChange = {setInfo} inputProps = {{'aria-label': 'description'}}/>}
					</FormControl>

					<FormControl margin = "normal" fullWidth>
						<InputLabel htmlFor = "email"></InputLabel>
						{
						editing ?
						<Input id = "email" defaultValue = {user?.email} disabled = {!editing} onChange = {setInfo} inputProps = {{'aria-label': 'description'}}/>:
						<Input id = "email" value = {user?.email} disabled = {!editing} onChange = {setInfo} inputProps = {{'aria-label': 'description'}}/>}
					</FormControl>

					<FormControl margin = "normal" fullWidth>
						<InputLabel htmlFor = "lastName"></InputLabel>
						{
						editing ?
						<Input id = "username" defaultValue = {user?.username} disabled = {!editing} onChange = {setInfo} inputProps = {{'aria-label': 'description'}}/>:
						<Input id = "username" value = {user?.username} disabled = {!editing} onChange = {setInfo} inputProps = {{'aria-label': 'description'}}/>}
					</FormControl>

					<FormControl margin = "normal" fullWidth>
						<InputLabel htmlFor = "role"></InputLabel>
						{
						editing ?
						<Input id = "role" defaultValue = {user?.role} disabled = {!editing} onChange = {setInfo} inputProps = {{'aria-label': 'description'}}/>:
						<Input id = "role" value = {user?.role} disabled = {!editing} onChange = {setInfo} inputProps = {{'aria-label': 'description'}}/>}
					</FormControl>
				</form>
			</Paper>
			</div>
			<br></br>
			{editing ?
				<>
					<div>
						<Button className = "edit-button" onClick = {save}>Save</Button>
						<Button className = "edit-button" onClick = {cancel}>Cancel</Button>
					</div>
				</>
				:
				<div>
					<Button className = "edit-button" onClick = {enableEdit}>Edit</Button>
				</div>
			}
		</>
	)

}