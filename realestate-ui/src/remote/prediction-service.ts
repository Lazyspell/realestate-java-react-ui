import {Prediction} from '../models/Prediction';
import {modelClient} from './clients/model-client';
import {PredictionArray} from './../models/PredictionArray'

export async function getPrediction(prediction : Array<number>){
    console.log(prediction)
    let response = await modelClient.post('/predict_ca', {prediction})
    return await response.data;

}