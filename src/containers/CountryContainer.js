import { useState, useEffect } from "react";

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
    const totalPopulation = getPopulations.reduce((a, b) => a + b)

    
    return ( 
        <p>Total world population: {totalPopulation}</p>
     );
}

export default CountryContainer;