const Country = ({country}) => {
    let langArray = []
    for (const language in country.languages) {
        console.log(country.languages[language])
        langArray.push(<li key={country.languages.language}>{country.languages[language]}</li>)
    }
    console.log(langArray)
    return(
        <div>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area.toLocaleString()} km<sup>2</sup></p>
            <p>Population: {country.population.toLocaleString()} citizens</p>
            <ul>
                {langArray}
            </ul>
            <img src={country.flags.png} alt="" />
        </div>
    )
}

export default Country