import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')


  const handleInputName = (event) => {
    setNewName(event.target.value)
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
    })

    if (validation){
      let newPersonsArray = persons.concat({ name: newName })
      setPersons(newPersonsArray)
      setNewName("")
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmitName}>
        <p>
          name: <input value={newName} onChange={handleInputName} />
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