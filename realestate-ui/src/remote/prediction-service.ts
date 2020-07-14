import {Prediction} from '../models/Prediction';
import {modelClient} from './clients/model-client';

export async function getPrediction(dataPoints: Array<number>){
    let response = await modelClient.get('/predict_ca')
    return await response.data;

}