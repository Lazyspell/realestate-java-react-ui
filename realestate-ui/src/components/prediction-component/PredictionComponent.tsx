import React, {useState, useEffect} from 'react';
import { Typography, FormControl, InputLabel, Input, Button, makeStyles, Paper } from '@material-ui/core';
import { Redirect } from 'react-router';
import {Alert} from '@material-ui/lab';
import {Prediction} from '../../models/Prediction';

import {getPrediction} from '../../remote/prediction-service';
import { PredictionArray } from '../../models/PredictionArray';
import { Users } from '../../models/User';

export interface PredictionProps{
    authUser: Users | undefined;
	errorMessage: string;
}

const useStyles = makeStyles({
    predictionTable: {
        display: "flex",
        justifyContent: "center",
        margin: 20,
        marginTop: 40,
        padding: 20
    },
});

const PredictionComponent = (props: PredictionProps) =>{
    const classes = useStyles();
    const [prediction, setPrediction] = useState([new Prediction(0,0,0,0,0,0,0,0,0,0)]);
    const [sqft, setSqft] = useState(0);
    const [county, setCount] = useState(0);
    const [city, setCity] = useState(0);
    const [year_built, setYearBuilt] = useState(0);
    const [view, setView] = useState(0);
    const [private_pool, setPrivatePool] = useState(0);
    const [bedrooms, setBedRooms] = useState(0);
    const [bathrooms, setBathRooms] = useState(0);
    const [attic, setAttic] = useState(0);
    const [basement, setBasement] = useState(0);
    

    let predictionArray = [sqft, county, city, year_built, view, private_pool, bedrooms, bathrooms,attic, basement]
    
    let getPredictionData = async ()=>{
        let result = await getPrediction(predictionArray);

    }  
}