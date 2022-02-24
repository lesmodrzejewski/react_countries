

const CountryDetails = ({selectedCountry}) => {
    console.log(selectedCountry)
    return ( 
        <>
            <h3>{selectedCountry.name}</h3>
            <img src={selectedCountry.flags.png} alt="flag" />        
        </>

     );
}

export default CountryDetails;