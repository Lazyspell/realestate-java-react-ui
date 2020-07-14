export class Prediction{
    square_foot: number;
    county: number;
    city: number;
    year_built: number;
    view: number;
    private_pool: number;
    bedrooms: number;
    bathrooms: number;
    attics: number;
    basement: number

    constructor(
        sqft: number,
        county: number,
        city: number,
        year_built: number,
        view: number,
        private_pool: number,
        bedrooms: number,
        bathrooms: number,
        attics: number,
        basement: number
    )
    {
        this.square_foot = sqft;
        this.county = county;
        this.city = city; 
        this.year_built = year_built;
        this.view = view;
        this.private_pool = private_pool;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.attics = attics;
        this.basement = basement
    }
}