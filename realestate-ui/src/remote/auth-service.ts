import { realEstateClient } from "./realEstate-client";


export async function userLogin(username: string, password: string){
	let response = await realEstateClient.post('/auth/', {username, password});
	return await response.data;
}