import React, { useState } from 'react'
import FilterForm from "./components/FilterForm"
import Persons from "./components/Persons"
import PersonForm from './components/PersonForm'

const App = ({data}) => {
  const [ persons, setPersons] = useState(data) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newFilter, setNewFilter] = useState('')
  const [ filteredList, setFilteredList] = useState(persons)

  const addNewName = (event) => {
    event.preventDefault()
    console.log("addNewName event happened.", event.target, newName, newNumber);
    const nameAlreadyExists = persons.filter(person => person.name === newName)
    console.log("nameAlreadyExists", nameAlreadyExists)
    if (nameAlreadyExists.length > 0) {
      alert(`${newName} is already added to phonebook!!!`)
    } else {
      const newRecord = [{"name": newName, number: newNumber}]
      setPersons(persons.concat(newRecord))
      setNewName("")
      setNewNumber("")
      setNewFilter("")
      setFilteredList(persons.concat(newRecord))
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

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm filter={newFilter} onFilterChange={handleFilterChange} />
      <PersonForm addNewName={addNewName} name={newName} handleNameChange={handleNameChange} number={newNumber} handleNumberChange={handleNumberChange} />
      <Persons filteredList={filteredList} />
    </div>
  )
}

export default App