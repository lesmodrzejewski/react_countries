import { useState, useEffect } from "react";

import CountrySelect from "../components/CountrySelect";

const CountryContainer = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries = function(){
        fetch('https://restcountries.com/v2/all')
        .then(request => request.json())
        .then(data => setCountries(data))
    }

    const getPopulations = countries.map((country)=> country.population )
    const totalPopulation = getPopulations.reduce((a, b) => a + b, 0)

    
    return ( 
        <>
                <p>Total world population: {totalPopulation}</p>
                <CountrySelect countries={countries}/>
        </>
             );
}

export default CountryContainer;