import {Users} from '../models/User';
import {NewUser} from '../models/NewUser';
import {realEstateClient} from './clients/realEstate-client';


export async function register(NewUser: NewUser){
	let response = await realEstateClient.post('/users', NewUser);
	return await response.data;
}

export async function getAllUsers(){
	let response = await realEstateClient.get('/users');
	return await response.data;
}