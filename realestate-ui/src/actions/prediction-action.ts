import {PredictionArray} from '../models/PredictionArray';
import {Dispatch} from 'redux';
import {getPrediction} from '../remote/prediction-service';


export const predictionActionTypes = {
	SUCCESSFUL_PREDICTION: 'SUCCESSFUL_PREDICTION',
	BAD_REQUEST: 'STORE_BAD_REQUEST'
}

// export const predictionAction = (newArray: PredictionArray) => async (dispatch: Dispatch) =>{
// 	try{
// 		let prediction = await getPrediction()
// 	}
// }