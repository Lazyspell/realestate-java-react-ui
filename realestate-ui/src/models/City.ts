export class City{
	city_id: number;
	city_name : string;
	city_housing_cost: number;
	city_rank : number;

	constructor(
		id: number,
		city_name: string,
		city_housing_cost: number,
		city_rank: number
	)
	{
		this.city_id = id;
		this.city_name = city_name;
		this.city_housing_cost = city_housing_cost;
		this.city_rank = city_rank;
	}
}