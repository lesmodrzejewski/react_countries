import { useState, useEffect } from "react";

import CountrySelect from "../components/CountrySelect";
import CountryDetails from "../components/CountryDetails";
import FavouriteCountries from "../components/FavouriteCountries";

const CountryContainer = () => {

    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [favouriteCountries, setFavouriteCountries] = useState([])

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries = function(){
        fetch('https://restcountries.com/v2/all')
        .then(request => request.json())
        .then(data => setCountries(data))
    }

    const countrySelected = function(country){
        setSelectedCountry(country)
    }

    const addFavouriteCountry = function(country){
        const copyFavouriteCountries = [...favouriteCountries, country]
        setFavouriteCountries(copyFavouriteCountries)
    }

    const getPopulations = countries.map((country)=> country.population )
    const totalPopulation = getPopulations.reduce((a, b) => a + b, 0)

    
    return ( 
        <>
                <p>Total world population: {totalPopulation}</p>
                <CountrySelect countries={countries} countrySelected={countrySelected}/>
                {selectedCountry ? <CountryDetails selectedCountry={selectedCountry} addFavouriteCountry={addFavouriteCountry}/> : null}
                <FavouriteCountries favouriteCountries={favouriteCountries}/>
        </>
             );
}

export default CountryContainer;