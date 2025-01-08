import Country from "./Country"

const CountryList = ({ countries, countryFilter }) => {



    let countryArray = countries.filter((country) => country.name.common.toLowerCase().match(countryFilter.toLowerCase(), "ig"))
    let switchParameter = countryArray.length === 0 ? 0 : countryArray.length === 1 ? 1 : countryArray.length <= 10 ? 2 : 3

    switch (switchParameter) {
        case 0: return <p>No country match.</p>
        case 1: return (
            <Country country={countryArray[0]} />
        )
        case 2:
            return (
                <ul>
                    {
                        countryArray.map(country => {
                            return <li key={country.name.common}>{country.name.common}</li>
                        })
                    }
                </ul>
            )
        default:
            return <p>To many matches, be more specific please</p>
                
            
    }
}

export default CountryList