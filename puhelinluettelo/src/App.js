import React, { useState, useEffect } from 'react'
import FilterForm from "./components/FilterForm"
import Persons from "./components/Persons"
import PersonForm from './components/PersonForm'
import personService from './services/persons'


const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newFilter, setNewFilter] = useState('')
  const [ filteredList, setFilteredList] = useState(persons)

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
        setFilteredList(response.data)
      })
  }, [])

  const addNewName = (event) => {
    event.preventDefault()
    console.log("addNewName event happened.", event.target, newName, newNumber);
    const nameAlreadyExists = persons.filter(person => person.name === newName)
    console.log("nameAlreadyExists", nameAlreadyExists)
    if (nameAlreadyExists.length > 0) {
      if (newNumber===nameAlreadyExists[0].number) {
        alert(`${newName} is already added to phonebook!!!`)
      } else {
        if (window.confirm(`${newName} is already added to phonebook, replace the old number ${nameAlreadyExists[0].number} with a new one ${newNumber}?`)) {
          personService
            .update(nameAlreadyExists[0].id, {name: nameAlreadyExists[0].name, number: newNumber, id: nameAlreadyExists[0].id})
            .then(response => {
              personService.getAll()
                .then(response => {
                  setPersons(response.data)
                  setNewFilter("")
                  setFilteredList(response.data)
                })
            })
        }
      }
    } else {
      const newPerson = {"name": newName, number: newNumber}
      
      personService
        .create(newPerson)
        .then(reponse => {
          setPersons(persons.concat([newPerson]))
          setNewName("")
          setNewNumber("")
          setNewFilter("")
          setFilteredList(persons.concat([newPerson]))
        }
      )
    }
  }

  const handleNameChange = (event) => {
    console.log("handleNameChange event happened.", event.target);
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log("handleNumberChange event happened.", event.target);
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log("handleFilterChange event happened.", event.target.value);
    setNewFilter(event.target.value)
    setFilteredList(persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase())))
  }

  const handleDeleteClicked = (person) => {
    console.log("handleDeleteClicked: ", person);
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService
        .remove(person.id)
        .then(response => {
          const updatedPersonList = persons.filter(p => p.id !== person.id)
          setPersons(updatedPersonList)
          setFilteredList(updatedPersonList)
      })
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm filter={newFilter} onFilterChange={handleFilterChange} />
      <PersonForm addNewName={addNewName} name={newName} handleNameChange={handleNameChange} number={newNumber} handleNumberChange={handleNumberChange} />
      <Persons filteredList={filteredList} handleDeleteClicked={handleDeleteClicked} />
    </div>
  )
}

export default App