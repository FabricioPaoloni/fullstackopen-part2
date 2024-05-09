import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  //A state variable that holds the name and phone of each person. We use some initial names to test.
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '3415123123' },
    { name: 'Aasdasdo Hellas', number: '345234623' },
    { name: 'Arweas Rothdbard', number: '3252523' },
    { name: 'Masa carc', number: '37536454123' },
    { name: 'Ppuaisd Helqwe', number: '12345123' },
  ])
  const [newName, setNewName] = useState('') //state used for add a new name
  const [newNumber, setNewNumber] = useState('') //used for add a new number
  const [filterName, setFilterName] = useState("") //used to filter the list of names

  let showAll = filterName === "" ? true : false
  let personsToShow = showAll
    ? persons 
    : persons.filter(person => {
      //We use a regular expression to test each person name with the filterName introduced by the user
      //The regexp is case insensitive
      let regex = new RegExp(filterName, 'i');
      let returnValue = regex.test(person.name)
      return returnValue
  })

  const handleFilterName = (event) => {
    setFilterName(event.target.value)
    // console.log()
  }
  const handleInputName = (event) => {
    setNewName(event.target.value)
  }
  const handleInputNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSubmitName = (event) => {
    event.preventDefault()
    let validation = true

    persons.map(person => {
      if (person.name === newName) {
        validation = false
        alert(`${newName} is already added to the phonebook`)
      }
      if(person.number === newNumber) {
        validation = false
        alert(`${newNumber} is already added to another user`)
      }
    })

    if (validation){
      let newPersonsArray = persons.concat(
        {
         name: newName, 
         number: newNumber 
        }
      )
      setPersons(newPersonsArray)
      setNewName("")
      setNewNumber("")
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <p>
        filter the list: <input value={filterName} onChange={handleFilterName} />
      </p>
      <h3>Add a new contact:</h3>
      <form onSubmit={handleSubmitName}>
        <p>
          name: <input value={newName} onChange={handleInputName} />
        </p>
        <p>
          number: <input value={newNumber} onChange={handleInputNumber} />
        </p>
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person => <Person key={person.name} person={person} />
      )}
      </ul>
    </div>
  )
}

export default App