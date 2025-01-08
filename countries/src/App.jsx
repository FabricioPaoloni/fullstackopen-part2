import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Filter from './components/CountryList'
import axios from "axios"
import CountryList from './components/CountryList'

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [showCountry, setShowCountry] = useState(null)

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => setCountries(response.data))
      .catch(error => alert('An error has ocurred, reload the page'))
  }, [])

  const handleFilter = (event) => {
    setFilter(event.target.value)
    setShowCountry(null)
  }

  return (
    <div>
      {
        countries == "" ?
          <p>Importing data from server... Please wait...</p> :
          <>
            <form>
              <input type="text" onChange={handleFilter} value={filter} />
            </form>
            <CountryList countries={countries} countryFilter={filter} showCountry={showCountry} setShowCountry={setShowCountry} />
          </>
      }


    </div>
  )
}

export default App
