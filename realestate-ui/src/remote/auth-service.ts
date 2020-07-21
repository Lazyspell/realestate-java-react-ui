import { realEstateClient } from "./clients/realEstate-client";


export async function userLogin(username: string, password: string){
	let response = await realEstateClient.post('/auth/', {username, password});
	return await response.data;
}

export async function logout(){
	let response = await realEstateClient.get('/auth');
	return await response;
}