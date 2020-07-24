import {Users} from '../../models/User';
import { makeStyles, Select, MenuItem, Grid, Typography, Button, Card } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import MaterialTable from 'material-table';
import React from "react";

import {getAllUsers} from '../../remote/user-service';


export interface UsersProps{

}

const useStyles = makeStyles({
	userTable: {
		display: "flex",
		justifyContent: "center",
		margin: 20,
		marginTop: 40,
		padding: 20
	},
});

const UserComponent = (props: UsersProps) => {

	const classes = useStyles();
	const [users, setUserTableData] = useState([new Users(0,'','','','','','')])
	const history = useHistory();

	let getUserData = async ()=>{
		let result = await getAllUsers();
		setUserTableData(result);
	}

	useEffect(()=>{
		getUserData();
	}, []);

	return (
		<>
			<div className = "display-wrapper">
				<Card>
					<div>
						<Grid container spacing = {3} style = {{paddingTop: "3%"}}>
							<Grid item xs = {4}>
                                <Typography variant = "h3">All Users</Typography>
                            </Grid>
						</Grid>
					</div>
					<div className = {classes.userTable}>
						<MaterialTable
						columns = {[
							{title: 'ID', field: 'user_id', editable: 'never' },
							{title: 'First Name', field: 'first_name', editable: 'never'},
							{title: 'Last Name', field: 'last_name', editable: 'never'},
							{title: 'Username', field: 'username', editable: 'never'},
							{title: 'Email Address', field: 'email', editable: 'never'},
							{title: 'User Role', field: 'role', editable: 'never'}
						]}

						//@ts-ignore
						onRowClick = {(event, rowData) => history.push('/users/' + rowData.user_id)}
						data = {users}
						title = "All Users"
						/>
					</div>
				</Card>
			</div>

			</>
	)

}

export default UserComponent;

