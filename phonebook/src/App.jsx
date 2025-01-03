import { useState, useEffect } from 'react'
import axios from "axios"
import Filter from './components/Filter'
import AddPerson from './components/AddPerson'
import PersonsList from './components/PersonsList'
import personServices from './services/persons'
import Notification from './components/Notification'
import './index.css'

const App = () => {
  //A state variable that holds the name and phone of each person. We use some initial names to test.
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('') //state used for add a new name
  const [newNumber, setNewNumber] = useState('') //used for add a new number
  const [filterName, setFilterName] = useState("") //used to filter the list of names
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)


  useEffect(() => {
    personServices
      .getAll()
      .then(initialData => setPersons(initialData))
    // console.log("axios promise fulfilled")
  }, [])


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
    let validationName = true
    let validationNumber = true
    let validationUpdate = false

    persons.map(person => {
      if (person.name === newName) {
        validationName = false
        validationUpdate = window.confirm(`${newName} is already added to the phonebook. Do you want to update the phone number?`)
        // console.log(validationUpdate)
      }
      if (person.number === newNumber) {
        validationNumber = false
        alert(`${newNumber} number is already added to another user`)
      }
    })

    if (validationUpdate && validationNumber) {
      let personId = ''
      let newPersonData = {}

      persons.map(person => {
        if (person.name === newName) {
          personId = person.id
          newPersonData = { ...person, number: newNumber }
          // console.log(personId, newPersonData)
        }
      })
      personServices
        .updatePerson(personId, newPersonData)
        .then(updatedPerson => {
          let auxArray = persons.map(person => {
            if (person.id === updatedPerson.id){
              return updatedPerson
            } else {
              return person
            }
          })
          // console.log(auxArray)
          setPersons(auxArray)
        })
        .catch(error => {
          setErrorMessage(`Information of ${newPersonData.name} has already been removed from the server`)
          let auxArray = persons.filter(person => person.id !== personId)
          setPersons(auxArray)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
    }

    if (validationName && validationNumber) {
      let newPerson = {
        name: newName,
        number: newNumber
      }
      personServices
        .createPerson(newPerson)
        .then(createdPerson => {
          
          setSuccessMessage(`${newName} added successfully`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
          setPersons(persons.concat(createdPerson))
          setNewName("")
          setNewNumber("")
        })
    }
  }

  const handleDeletePerson = (id) => {
    personServices
      .deletePerson(id)
      .then(deleted => {
        // console.log(deleted)
        let auxArray = persons.filter(person => person.id !== id)
        setPersons(auxArray)
      })
  }

  const handleUpdatePerson = () => {

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} style='success' />
      <Notification message={errorMessage} style='error' />
      <Filter filterName={filterName} handleFilterName={handleFilterName} />
      <h3>Add a new contact:</h3>
      <AddPerson handleSubmitName={handleSubmitName} newName={newName} handleInputName={handleInputName}
        handleInputNumber={handleInputNumber} newNumber={newNumber} />
      <h3>Numbers</h3>
      <PersonsList personsToShow={personsToShow} handleDeletePerson={handleDeletePerson} />
    </div>
  )
}

export default App