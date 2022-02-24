

const CountrySelect = ({countries}) => {


    const countryItems = countries.map((country) => {
        return <option key={country.alpha3Code}>{country.name}</option>
    })




    return ( 
        <>
            <select>
                <option>Choose a country</option>
                {countryItems}
            </select>
        
        </>
     );
}

export default CountrySelect;