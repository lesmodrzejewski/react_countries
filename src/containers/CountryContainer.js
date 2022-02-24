import { useState, useEffect } from "react";

const CountryContainer = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        getCountries();
    }, [])


    
    return ( 
        <h2>This is CountryContainer</h2>
     );
}

export default CountryContainer;