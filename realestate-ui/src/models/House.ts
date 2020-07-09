import { throws } from "assert";

export class House{
	house_id: number;
	attic: number;
	basement: number;
	bath: number;
	bed: number;
	house_price: number;
	private_pool: number;
	sqft_per_a: number;
	street_name: string;
	street_number: string;
	view: number;
	year_built: number;
	city: string;
	county: string;

	constructor(
		id: number,
		attic: number,
		basement: number,
		bath: number,
		bed: number,
		house_price: number,
		private_pool: number,
		sqft_per_a: number,
		street_name: string, 
		street_number: string,
		view: number,
		year_built: number,
		city: string,
		county: string
	)
	{
		this.house_id = id;
		this.attic = attic;
		this.basement = basement;
		this.bath = bath;
		this.bed = bed;
		this.house_price = house_price;
		this.private_pool = private_pool;
		this.sqft_per_a = sqft_per_a;
		this.street_name = street_name;
		this.street_number = street_number;
		this.view = view;
		this.year_built = year_built;
		this.city = city;
		this.county = county;
	}


}