import React from 'react'
import Country from './Country'
import CountryDetails from './CountryDetails'

const CountryList = ({filteredCountries, setFilter, showCountryClicked}) => {
    console.log('Component CountryList props:', filteredCountries);

    if  (filteredCountries.length === 1) {
        return (
            <div id="CountryDetails">
                <CountryDetails country={filteredCountries[0]} />
            </div>
        )
    } else if (filteredCountries.length <= 10)  {
        return (
            <div id="CountryList">
                {filteredCountries.map((country) =>
                    <Country key={country.name} name={country.name} setFilter={setFilter} showCountryClicked={showCountryClicked} />
                )}
            </div>
        )
    } else {
        return (
            <div id="CountryList">
                <p>Too many countries, specify filter more.</p>
            </div>
        )
    }
}

export default CountryList