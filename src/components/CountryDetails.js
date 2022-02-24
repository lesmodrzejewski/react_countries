

const CountryDetails = ({selectedCountry, addFavouriteCountry}) => {
    
    const handleClick = (event)=>{
        const selectFavourite = selectedCountry
        console.log(selectFavourite)
        addFavouriteCountry(selectFavourite)}


    return ( 
        <>
            <h3>{selectedCountry.name}</h3>
            <img src={selectedCountry.flags.png} alt="flag" />
            <button value={selectedCountry} onClick={handleClick}>Add to Favourites</button>        
        </>

     );
}

export default CountryDetails;