import React, {useState, useEffect} from 'react';
import { Typography, FormControl, InputLabel, Input, Button, makeStyles, Paper, MenuItem, Select } from '@material-ui/core';
import { Redirect } from 'react-router';
import {Alert} from '@material-ui/lab';
import {Prediction} from '../../models/Prediction';

import {getPrediction} from '../../remote/prediction-service';
import { PredictionArray } from '../../models/PredictionArray';
import { Users } from '../../models/User';

export interface PredictionProps{
    authUser: Users | undefined;
	errorMessage: string;
}

const useStyles = makeStyles({
    predictionContainer: {
        display: "flex",
        justifyContent: "center",
        margin: 20,
        marginTop: 40,
        padding: 20
    },
    registerForm: {
        width: "50%"
    }
});

const PredictionComponent = (props: PredictionProps) =>{
    const classes = useStyles();
    const [prediction, setPrediction] = useState(0);
    const [sqft, setSqft] = useState(0);
    const [county, setCounty] = useState(0);
    const [city, setCity] = useState(0);
    const [year_built, setYearBuilt] = useState(0);
    const [view, setView] = useState(0);
    const [private_pool, setPrivatePool] = useState(0);
    const [bedrooms, setBedRooms] = useState(0);
    const [bathrooms, setBathRooms] = useState(0);
    const [attic, setAttic] = useState(0);
    const [basement, setBasement] = useState(0);
    
    let updateFormField = (e: any)=>{
        switch(e.target.id){
            case 'sqft':
                setSqft(e.target.value);
                break;
            case 'county':
                setCounty(e.target.value);
                break;
            case 'city':
                setCity(e.target.value);
                break;
            case 'year_built':
                setYearBuilt(e.target.value);
                break;
            case 'view':
                setView(e.target.value);
                break;
            case 'private_pool':
                setYearBuilt(e.target.value);
                break;
            case 'bedrooms':
                setBedRooms(e.target.value);
                break;
            case 'bathrooms':
                setBathRooms(e.target.value);
                break;
            case 'attic': 
                setAttic(e.target.value);
                break;
            case 'basement':
                setBasement(e.target.value);
        }
    }

    
    
    let getPredictionData = async ()=>{
        let result = await getPrediction([sqft, county, city, year_built, view, private_pool, bedrooms, bathrooms,attic, basement]);
        setPrediction(result);

    }  

    return(
        <Paper className = {classes.predictionContainer}>
            <form className={classes.registerForm}>
                <Typography align = "center" variant = "h4">Price Prediction</Typography>

                <FormControl margin = "normal" fullWidth>
                    <InputLabel htmlFor = "sqft"> Sqft of House</InputLabel>
                    <Input 
                        onChange = {updateFormField}
                        value = {sqft}
                        id = "sqft" type = "number"
                        placeholder = "Enter Sqft of House" />
                </FormControl>

                <FormControl margin = "normal" fullWidth>
                    <InputLabel htmlFor = "County">County</InputLabel>
                    <Select 
                        labelId = "county-label"
                        id = "county"
                        value = {county}
                        onChange = {updateFormField}>
                            <MenuItem value = {1}>Riverside</MenuItem>
                            <MenuItem value = {2}>Los Angeles</MenuItem>
                            <MenuItem value = {3}>Orange County</MenuItem>
                    </Select>
                </FormControl>

                <FormControl margin = "normal" fullWidth>
                    <InputLabel htmlFor = "City">City</InputLabel>
                    <Select
                        labelId = "city-label"
                        id = "city"
                        value = {city}
                        onChange = {updateFormField}>
                            <MenuItem value = {82}>Acton</MenuItem>
                            <MenuItem value = {176}>Agoura Hills</MenuItem>
                            <MenuItem value = {124}>Agua Dulce</MenuItem>
                            <MenuItem value = {72}>Aguanga</MenuItem>
                            <MenuItem value = {143}>Alberhill</MenuItem>
                            <MenuItem value = {184}>Aliso Viejo </MenuItem>
                            <MenuItem value = {177}>Altadena</MenuItem>
                            <MenuItem value = {103}>Anaheim</MenuItem>
                            <MenuItem value = {170}>Anaheim Hills</MenuItem>
                            <MenuItem value = {16}>Anza</MenuItem>
                            <MenuItem value = {200}>Arcadia</MenuItem>
                            <MenuItem value = {74}>Arleta</MenuItem>
                            <MenuItem value = {78}>Artesia</MenuItem>
                            <MenuItem value = {198}>Avalon</MenuItem>
                            <MenuItem value = {67}>Azusa</MenuItem>
                            <MenuItem value = {54}>Baldwin Park</MenuItem>
                            <MenuItem value = {9}>Banning</MenuItem>
                            <MenuItem value = {22}>Beaumont</MenuItem>
                            <MenuItem value = {51}>Bel Air</MenuItem>
                            <MenuItem value = {47}>Bell</MenuItem>
                            <MenuItem value = {59}>Bell Gardens</MenuItem>
                            <MenuItem value = {71}>Bellflower</MenuItem>
                            <MenuItem value = {61}>Bermuda Dunes</MenuItem>
                            <MenuItem value = {1}>Blythe</MenuItem>
                            <MenuItem value = {156}>Brea</MenuItem>
                            <MenuItem value = {106}>Buena Park</MenuItem>
                            <MenuItem value = {191}>Burbank</MenuItem>
                            <MenuItem value = {5}>Cabazon</MenuItem>
                            <MenuItem value = {204}>Calabasas</MenuItem>
                            <MenuItem value = {25}>Calimesa</MenuItem>
                            <MenuItem value = {84}>Canyon Country</MenuItem>
                            <MenuItem value = {97}>Canyon Lake</MenuItem>
                            <MenuItem value = {75}>Carson</MenuItem>
                            <MenuItem value = {101}>Castaic</MenuItem>
                            <MenuItem value = {27}>Cathedral City</MenuItem>
                            <MenuItem value = {155}>Cerritos</MenuItem>
                            <MenuItem value = {146}>Chatsworth</MenuItem>
                            <MenuItem value = {56}>Cherry Valley</MenuItem>
                            <MenuItem value = {43}>City of Commerce</MenuItem>
                            <MenuItem value = {153}>Claremont</MenuItem>
                            <MenuItem value = {19}>Coachella</MenuItem>
                            <MenuItem value = {60}>Colton</MenuItem>
                            <MenuItem value = {36}>Compton</MenuItem>
                            <MenuItem value = {73}>Corona</MenuItem>
                            <MenuItem value = {231}>Corona Del Mar</MenuItem>
                            <MenuItem value = {203}>Coto De Caza</MenuItem>
                            <MenuItem value = {79}>Covina</MenuItem>
                            <MenuItem value = {42}>Cudahy</MenuItem>
                            <MenuItem value = {224}>Culver City</MenuItem>
                            <MenuItem value = {165}>Cypress</MenuItem>
                            <MenuItem value = {202}>Dana Point</MenuItem>
                            <MenuItem value = {8}>DHS</MenuItem>
                            <MenuItem value = {137}>Diamond Bar</MenuItem>
                            <MenuItem value = {117}>Downey</MenuItem>
                            <MenuItem value = {77}>Duarte</MenuItem>
                            <MenuItem value = {162}>Eagle Rock</MenuItem>
                            <MenuItem value = {68}>El Monte</MenuItem>
                            <MenuItem value = {225}>El Segundo</MenuItem>
                            <MenuItem value = {105}>El Sereno</MenuItem>
                            <MenuItem value = {211}>Encino</MenuItem>
                            <MenuItem value = {179}>Fountain Valley</MenuItem>
                            <MenuItem value = {33}>French Valley</MenuItem>
                            <MenuItem value = {163}>Fullerton</MenuItem>
                            <MenuItem value = {122}>Garden Grove</MenuItem>
                            <MenuItem value = {100}>Gardena</MenuItem>
                            <MenuItem value = {140}>Glassell Park</MenuItem>
                            <MenuItem value = {188}>Glendale</MenuItem>
                            <MenuItem value = {120}>Glendora</MenuItem>
                            <MenuItem value = {127}>Granada Hills </MenuItem>
                            <MenuItem value = {129}>Hacienda Heights</MenuItem>
                            <MenuItem value = {121}>Harbor City</MenuItem>
                            <MenuItem value = {70}>Hawaiian Gardens</MenuItem>
                            <MenuItem value = {136}>Hawthorne</MenuItem>
                            <MenuItem value = {13}>Hemet</MenuItem>
                            <MenuItem value = {222}>Hermosa Beach</MenuItem>
                            <MenuItem value = {31}>Highgrove</MenuItem>
                            <MenuItem value = {151}>Highland Park</MenuItem>
                            <MenuItem value = {64}>Hollydale</MenuItem>
                            <MenuItem value = {160}>Hollywood</MenuItem>
                            <MenuItem value = {21}>Homeland</MenuItem>
                            <MenuItem value = {192}>Huntington Beach</MenuItem>
                            <MenuItem value = {48}>Huntington Park</MenuItem>                   
                            <MenuItem value = {17}>Idyllwild</MenuItem>
                            <MenuItem value = {142}>Indian Wells</MenuItem>
                            <MenuItem value = {18}>Indio</MenuItem>
                            <MenuItem value = {116}>Inglewood</MenuItem>
                            <MenuItem value = {205}>Irvine</MenuItem>
                            <MenuItem value = {53}>Kagel Canyon</MenuItem>
                            <MenuItem value = {190}>La Canada Flintridge</MenuItem>
                            <MenuItem value = {181}>La Crescenta</MenuItem>
                            <MenuItem value = {109}>La Habra</MenuItem>
                            <MenuItem value = {185}>La Habra Heights</MenuItem>
                            <MenuItem value = {93}>La Mirada</MenuItem>
                            <MenuItem value = {117}>La Palma</MenuItem>
                            <MenuItem value = {57}> La Puente </MenuItem>
                            <MenuItem value = {34}>La Quinta</MenuItem>
                            <MenuItem value = {135}>La Verne</MenuItem>
                            <MenuItem value = {219}>Ladera Heights</MenuItem>
                            <MenuItem value = {228}>Laguna Beach</MenuItem>
                            <MenuItem value = {187}>Laguna Hills</MenuItem>
                            <MenuItem value = {201}>Laguna Niguel</MenuItem>
                            <MenuItem value = {6}>Lake Elizabeth</MenuItem>
                            <MenuItem value = {28}>Lake Elsinore</MenuItem>
                            <MenuItem value = {159}>Lake Forest</MenuItem>
                            <MenuItem value = {76}>Lake Hughes</MenuItem>
                            <MenuItem value = {3}>Lake Los Angeles</MenuItem>
                            <MenuItem value = {113}>Lake Matthews</MenuItem>
                            <MenuItem value = {139}>Lakeview Terrace</MenuItem>
                            <MenuItem value = {99}>Lakewood</MenuItem>
                            <MenuItem value = {14}>Lancaster</MenuItem>
                            <MenuItem value = {104}>Lawndale</MenuItem>
                            <MenuItem value = {87}>Leona Valley</MenuItem>
                            <MenuItem value = {126}>Lincoln Heights</MenuItem>
                            <MenuItem value = {10}>Little Rock</MenuItem>
                            <MenuItem value = {144}>Lomita</MenuItem>
                            <MenuItem value = {132}>Long Beach</MenuItem>
                            <MenuItem value = {193}>Los Alamito</MenuItem>
                            <MenuItem value = {110}>Los Angeles</MenuItem>
                            <MenuItem value = {236}>Los Feliz</MenuItem>
                            <MenuItem value = {37}>Lynwood</MenuItem>
                            <MenuItem value = {234}>Manhattan Beach</MenuItem>
                            <MenuItem value = {175}>Mar Vista</MenuItem>
                            <MenuItem value = {46}>Maywood</MenuItem>
                            <MenuItem value = {32}>Menifee</MenuItem>
                            <MenuItem value = {138}>Midway City</MenuItem>
                            <MenuItem value = {89}>Mission Hills San Fernando</MenuItem>
                            <MenuItem value = {158}>Mission Viejo</MenuItem>
                            <MenuItem value = {167}>Monrovia</MenuItem>
                            <MenuItem value = {83}>Montebello</MenuItem>
                            <MenuItem value = {150}>Monterey Park</MenuItem>
                            <MenuItem value = {123}>Montrose</MenuItem>
                            <MenuItem value = {23}>Moreno Valley</MenuItem>
                            <MenuItem value = {210}>Mount Washington</MenuItem>
                            <MenuItem value = {92}>Mountain Center</MenuItem>
                            <MenuItem value = {58}>Murrieta</MenuItem>
                            <MenuItem value = {125}>Newhall</MenuItem>
                            <MenuItem value = {226}>Newport Beach</MenuItem>
                            <MenuItem value = {96}>Norco</MenuItem>
                            <MenuItem value = {107}>North Hills</MenuItem>
                            <MenuItem value = {130}>North Hollywood</MenuItem>
                            <MenuItem value = {214}>North Tustin</MenuItem>
                            <MenuItem value = {157}>Northridge</MenuItem>
                            <MenuItem value = {66}>Norwalk</MenuItem>
                            <MenuItem value = {29}>Nuevo/Lakeview</MenuItem>
                            <MenuItem value = {148}>Orange</MenuItem>
                            <MenuItem value = {235}>Ortega Mountain</MenuItem>
                            <MenuItem value = {4}>Outside State</MenuItem>
                            <MenuItem value = {50}>Pacoima</MenuItem>
                            <MenuItem value = {65}>Palm Desert</MenuItem>
                            <MenuItem value = {91}>Palm Springs</MenuItem>
                            <MenuItem value = {20}>Palmdale</MenuItem>
                            <MenuItem value = {229}>Palos Verdes Estates</MenuItem>
                            <MenuItem value = {232}>Palos Verdes Peninsula</MenuItem>
                            <MenuItem value = {62}>Panorama City</MenuItem>
                            <MenuItem value = {52}>Paramount</MenuItem>
                            <MenuItem value = {189}>Pasadena</MenuItem>
                            <MenuItem value = {12}>Pearblossom</MenuItem>
                            <MenuItem value = {24}>Perris</MenuItem>
                            <MenuItem value = {90}>Phillips Ranch</MenuItem>
                            <MenuItem value = {63}>Pico Rivera</MenuItem>
                            <MenuItem value = {152}>Placentia</MenuItem>
                            <MenuItem value = {227}>Playa Del Rey</MenuItem>
                            <MenuItem value = {39}>Pomona</MenuItem>
                            <MenuItem value = {2}>Quail Valley</MenuItem>
                            <MenuItem value = {30}>Quartz Hill</MenuItem>
                            <MenuItem value = {108}>Rancho Mirage</MenuItem>
                            <MenuItem value = {218}>Rancho Palos Verdes</MenuItem>
                            <MenuItem value = {149}>Rancho Santa Margarita</MenuItem>
                            <MenuItem value = {196}>Redlands</MenuItem>
                            <MenuItem value = {215}>Redondo Beach</MenuItem>
                            <MenuItem value = {102}>Reseda</MenuItem>
                            <MenuItem value = {44}>Riverside (City)</MenuItem>
                            <MenuItem value = {221}>Rolling Hills Estates</MenuItem>
                            <MenuItem value = {26}>Romoland</MenuItem>
                            <MenuItem value = {114}>Rosemead</MenuItem>
                            <MenuItem value = {209}>Rossmoor</MenuItem>
                            <MenuItem value = {141}>Rowland Heights</MenuItem>
                            <MenuItem value = {119}>Sage</MenuItem>
                            <MenuItem value = {206}>San Clemente</MenuItem>
                            <MenuItem value = {115}>San Dimas</MenuItem>
                            <MenuItem value = {49}>San Fernando</MenuItem>
                            <MenuItem value = {171}>San Gabriel</MenuItem>
                            <MenuItem value = {11}>San Jacinto</MenuItem>
                            <MenuItem value = {183}>San Juan Capistrano</MenuItem>
                            <MenuItem value = {230}>San Marino</MenuItem>
                            <MenuItem value = {147}>San Pedro</MenuItem>
                            <MenuItem value = {118}>Santa Ana</MenuItem>
                            <MenuItem value = {69}>Santa Fe Springs</MenuItem>
                            <MenuItem value = {98}>Saugus</MenuItem>
                            <MenuItem value = {194}>Seal Beach</MenuItem>
                            <MenuItem value = {133}>Shadow Hills</MenuItem>
                            <MenuItem value = {208}>Sherman Oaks</MenuItem>
                            <MenuItem value = {186}>Sierra Madre</MenuItem>
                            <MenuItem value = {173}>Signal Hill</MenuItem>
                            <MenuItem value = {172}>Silver Lake</MenuItem>
                            <MenuItem value = {40}>South El Monte</MenuItem>
                            <MenuItem value = {55}>South Gate</MenuItem>
                            <MenuItem value = {213}>South Pasadena</MenuItem>
                            <MenuItem value = {88}>Stanton</MenuItem>
                            <MenuItem value = {161}>Stevenson Ranch</MenuItem>
                            <MenuItem value = {223}>Studio City</MenuItem>
                            <MenuItem value = {7}>Sun City</MenuItem>
                            <MenuItem value = {112}>Sun Valley</MenuItem>
                            <MenuItem value = {131}>Sunland</MenuItem>
                            <MenuItem value = {195}>Surfside</MenuItem>
                            <MenuItem value = {85}>Sylmar</MenuItem>
                            <MenuItem value = {197}>Tarzana</MenuItem>
                            <MenuItem value = {81}>Temecula</MenuItem>
                            <MenuItem value = {166}>Temple City</MenuItem>
                            <MenuItem value = {15}>Thousand Palms</MenuItem>
                            <MenuItem value = {220}>Toluca Lake</MenuItem>
                            <MenuItem value = {178}>Torrance</MenuItem>
                            <MenuItem value = {128}>Tujunga</MenuItem>
                            <MenuItem value = {174}>Tustin</MenuItem>
                            <MenuItem value = {111}>Valencia</MenuItem>
                            <MenuItem value = {168}>Valley Glen</MenuItem>
                            <MenuItem value = {212}>Valley Village</MenuItem>
                            <MenuItem value = {233}>Venice</MenuItem>
                            <MenuItem value = {217}>Villa Park</MenuItem>
                            <MenuItem value = {169}>Walnut</MenuItem>
                            <MenuItem value = {94}>West Covina</MenuItem>
                            <MenuItem value = {134}>West Hills</MenuItem>
                            <MenuItem value = {216}>Westchester</MenuItem>
                            <MenuItem value = {207}>Westlake Village</MenuItem>
                            <MenuItem value = {145}>Westminster</MenuItem>
                            <MenuItem value = {80}>Whittier</MenuItem>
                            <MenuItem value = {41}>Wildomar</MenuItem>
                            <MenuItem value = {45}>Wilmington</MenuItem>
                            <MenuItem value = {38}>Winchester</MenuItem>
                            <MenuItem value = {95}>Winnetka</MenuItem>
                            <MenuItem value = {35}>Woodcrest Hills</MenuItem>
                            <MenuItem value = {180}>Woodland Hills</MenuItem>
                            <MenuItem value = {182}>Acton</MenuItem>
                            <MenuItem value = {86}>Yucaipa</MenuItem>
                        </Select>
                </FormControl>

                <FormControl margin = "normal" fullWidth>
                    <InputLabel htmlFor = "YrBuilt"> Year House was Built</InputLabel>
                    <Input 
                        onChange = {updateFormField}
                        value = {year_built}
                        id = "yearBuilt" type = "number"
                        placeholder = "Year" />
                </FormControl>

                <FormControl margin = "normal" fullWidth>
                    <InputLabel htmlFor = "View">View</InputLabel>
                    <Select 
                        labelId = "view-label"
                        id = "view"
                        value = {view}
                        onChange = {updateFormField}>
                            <MenuItem value = {0}>No</MenuItem>
                            <MenuItem value = {1}>Yes</MenuItem>
                    </Select>
                </FormControl>

                <FormControl margin = "normal" fullWidth>
                    <InputLabel htmlFor = "View">Private Pool</InputLabel>
                    <Select 
                        labelId = "private_pool-label"
                        id = "privatePool"
                        value = {private_pool}
                        onChange = {updateFormField}>
                            <MenuItem value = {0}>No</MenuItem>
                            <MenuItem value = {1}>Yes</MenuItem>
                    </Select>
                </FormControl>

                <FormControl margin = "normal" fullWidth>
                    <InputLabel htmlFor = "Bedrooms"> Bedrooms</InputLabel>
                    <Input 
                        onChange = {updateFormField}
                        value = {bedrooms}
                        id = "beds" type = "number"
                        placeholder = "Number of Bedrooms" />
                </FormControl>

                <FormControl margin = "normal" fullWidth>
                    <InputLabel htmlFor = "YrBuilt"> Bathrooms </InputLabel>
                    <Input 
                        onChange = {updateFormField}
                        value = {bathrooms}
                        id = "bathrooms" type = "number"
                        placeholder = "Number of Bathrooms" />
                </FormControl>

                <FormControl margin = "normal" fullWidth>
                    <InputLabel htmlFor = "Attic"> Attics </InputLabel>
                    <Input 
                        onChange = {updateFormField}
                        value = {attic}
                        id = "attic" type = "number"
                        placeholder = "Number of Attics" />
                </FormControl>

                <FormControl margin = "normal" fullWidth>
                    <InputLabel htmlFor = "Basement"> Basement </InputLabel>
                    <Input 
                        onChange = {updateFormField}
                        value = {basement}
                        id = "basement" type = "number"
                        placeholder = "Number of Basement" />
                </FormControl>

                <br/>
                <Button
                    onClick = {getPredictionData}
                    variant = "contained"
                    color = "secondary"
                    size = "medium">Submit
                </Button>
                <br/>
            </form>

            <div>
               Price Predicted: {prediction}
            </div>
        </Paper>
    )
}

export default PredictionComponent;