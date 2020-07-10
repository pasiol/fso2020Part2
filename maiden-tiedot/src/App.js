import React, { useState } from 'react';
import SearchForm from './components/SearchForm'
import CountryList from './components/CountryList'

const App = ({data}) => {
  
  
  const [ countries ] = useState(data)
  const [ filter, setFilter ] = useState("")
  const [ filteredCountries, setFilteredCountries ] = useState([])
  

  const handleFilterChange = (event) => {
    console.log("onFilterChange event happened: ", event.target.value);
    setFilter(event.target.value)
    setFilteredCountries(countries.filter(country => country.name.toLowerCase().includes(event.target.value.toLowerCase())))
  }

  const filterCountries = (name) => {
    console.log("filterCountries:", name)
    setFilteredCountries(countries.filter(country => country.name.toLowerCase().includes(name.toLowerCase())))
  }

  const showCountryClicked = (name) => {
    console.log('showCountry clicked', name)
    filterCountries(name)
    setFilter(name)
  }
  
  return (
    <React.Fragment>
      <SearchForm onFilterChange={handleFilterChange} filter={filter} />
      <CountryList filteredCountries={filteredCountries} showCountryClicked={showCountryClicked} />
    </React.Fragment>
  );
}

export default App;
