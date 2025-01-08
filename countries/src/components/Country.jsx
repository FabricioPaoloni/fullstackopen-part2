const Country = ({country}) => {
    let langArray = []
    for (const language in country.languages) {
        // console.log(country.languages[language])
        langArray.push(<li key={country.languages.language}>{country.languages[language]}</li>)
    }
    // console.log(langArray)
    return(
        <div>
            <h2>{country.name.common}</h2>
            <p><b>Capital:</b> {country.capital ? country.capital[0] : null}</p>
            <p><b>Area:</b> {country.area ? country.area.toLocaleString() : null} km<sup>2</sup></p>
            <p><b>Population:</b> {country.population ? country.population.toLocaleString() : null} citizens</p>
            <ul>
                {langArray}
            </ul>
            <img src={country.flags.png ? country.flags.png : null} alt="" />
        </div>
    )
}

export default Country