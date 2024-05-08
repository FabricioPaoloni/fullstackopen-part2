import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '3415123123'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
        return 
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
        {persons.map(person => <Person key={person.name} person={person} />
      )}
      </ul>
    </div>
  )
}

export default App