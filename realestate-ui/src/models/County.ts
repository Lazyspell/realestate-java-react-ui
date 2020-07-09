export class County{
	county_id: number;
	county_name : string;
	county_rank : string;
	county_housing_cost: number;

	constructor(
		id: number, 
		name: string,
		rank: string,
		cost: number
	)

	{
		this.county_id = id;
		this.county_name = name;
		this.county_rank = rank;
		this.county_housing_cost = cost;

	}
}