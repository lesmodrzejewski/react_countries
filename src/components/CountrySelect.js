

const CountrySelect = ({countries, countrySelected}) => {

    const handleChange = function(event){
        const chosenCountry = countries.find((country)=> event.target.value === country.alpha3Code)
        console.log(chosenCountry)
        countrySelected(chosenCountry)
    }

    const countryItems = countries.map((country) => {
        return <option key={country.alpha3Code} value={country.alpha3Code}>{country.name}</option>
    })




    return ( 
        <>
            <select onChange={handleChange}>
                <option>Choose a country</option>
                {countryItems}
            </select>
        
        </>
     );
}

export default CountrySelect;