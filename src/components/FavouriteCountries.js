const FavouriteCountries = ({favouriteCountries}) => {

    const favouriteList = favouriteCountries.map((country)=>{
        return <li key={country.alpha3Code}>{country.name}</li>
    })

    return (
        <ul>
            {favouriteList}
        </ul>
    )
}

export default FavouriteCountries;