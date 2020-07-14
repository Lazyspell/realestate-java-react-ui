import {City} from '../models/City';
import {realEstateClient} from './clients/realEstate-client';

export async function getAllCites(){
	let response = await realEstateClient.get('/city')
	return await response.data;
}
