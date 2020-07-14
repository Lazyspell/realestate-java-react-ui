import { Users } from "../../models/User";
import { makeStyles, Select, MenuItem, Grid, Typography, Button, Card } from '@material-ui/core';
import { City } from "../../models/City";
import { County } from "../../models/County";
import { useState, useEffect } from "react";
import { House } from "../../models/House";
import { Link } from 'react-router-dom';
import MaterialTable from 'material-table';


import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";
import { getAllCites } from "../../remote/city-service";
import React from "react";


export interface InfoProps{
	// authUser: Users;
	// errorMessage: string;
}

const useStyles = makeStyles({
    reimbTable: {
        display: "flex",
        justifyContent: "center",
        margin: 20,
        marginTop: 40,
        padding: 20
    },
});

const InfoComponent = (props: InfoProps) =>{
	const classes = useStyles();
	const [cities, setCityTableData] = useState([new City(0,'',0,0)]);
    const [county, setCountyTableData] = useState([new County(0,'','',0)])
    const [house, setHouseTableData] = useState([new House(0,0,0,0,0,0,0,0,'','',0,0,'','')])

    let getCityData = async ()=>{
        let result = await getAllCites();
           
        setCityTableData(result);
    }

    useEffect(()=>{
        getCityData();
    }, []);

    return (
        <>
            <div className = "display-wrapper">
                <Card>
                    <div>
                        <Grid container spacing={3} style = {{paddingTop:"3%"}}>
                            <Grid item xs = {2}></Grid>
                            <Grid item xs = {2}>
                                <Button component = {Link} to = '/additem' variant = 'contained' color = 'secondary'>Add New City</Button>
                            </Grid>
                            <Grid item xs = {4}>
                                <Typography variant = "h3">All Cities</Typography>
                            </Grid>
                            <Grid item xs = {2}>
                                <Button component = {Link} to = '/cities' variant = "contained" color = "secondary">View all Cities</Button>
                            </Grid>
                        </Grid>
                    </div>
                    <div className = {classes.reimbTable}>
                        <MaterialTable

                        columns = {[
                            {title: 'ID', field: 'city_id', editable: 'never'},
                            {title: 'City Name', field: 'city_name', editable: 'never'},
                            {title: 'Housing Cost', field: 'city_housing_cost', editable: 'always'},
                            {title: 'City Rank', field: 'city_rank', editable: 'never'}                    
                        ]}
                        data = {cities}
                        title = "All Cities"
                        />
                    </div>
                    
                </Card>
            </div>
        </>
    )
}

export default InfoComponent;


