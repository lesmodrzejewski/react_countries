import { useState, useEffect } from "react";

import CountrySelect from "../components/CountrySelect";
import CountryDetails from "../components/CountryDetails";

const CountryContainer = () => {

    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null)

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

    const getPopulations = countries.map((country)=> country.population )
    const totalPopulation = getPopulations.reduce((a, b) => a + b, 0)

    
    return ( 
        <>
                <p>Total world population: {totalPopulation}</p>
                <CountrySelect countries={countries} countrySelected={countrySelected}/>
                {selectedCountry ? <CountryDetails selectedCountry={selectedCountry}/> : null}
        </>
             );
}

export default CountryContainer;