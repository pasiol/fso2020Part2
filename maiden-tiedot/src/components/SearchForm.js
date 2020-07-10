import React from 'react'

const SearchForm = ({filter, onFilterChange}) => {
    return (
        <div id="SearchForm">
            <form>
                find countries<input onChange={onFilterChange} value={filter} />
            </form>
        </div>
    )
}

export default SearchForm