import Country from "./Country"


const CountryList = ({ countries, countryFilter, showCountry, setShowCountry }) => {



    let countryArray = countries.filter((country) => country.name.common.toLowerCase().match(countryFilter.toLowerCase(), "ig"))
    let switchParameter = countryArray.length === 0 ? 0 : countryArray.length === 1 ? 1 : countryArray.length <= 10 ? 2 : 3
    const handleShow = (index) => {
        if(showCountry !== null){
            if(showCountry === index) {
                setShowCountry(null)
            } else {setShowCountry(index)}
        } else {setShowCountry(index)}

        // showCountry === null ? setShowCountry(index) : setShowCountry(null)
    }

    switch (switchParameter) {
        case 0: return <p>No country match.</p>
        case 1: return (
            <Country country={countryArray[0]} />
        )
        case 2:
            return (
                <>
                <ul>
                    {
                        countryArray.map((country, index) => {
                            return <li key={country.name.common}>{country.name.common} <button onClick={() => handleShow(index)}>{showCountry === index ? "hide" : "show"}</button></li>
                        })
                    }
                </ul>
            
            {showCountry === null ? null : <Country country={countryArray[showCountry]} />}
                </>
            )
        default:
            return <p>To many matches, be more specific please</p>
                
            
    }
}

export default CountryList