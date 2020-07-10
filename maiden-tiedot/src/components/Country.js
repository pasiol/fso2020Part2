import React from 'react'

const Country = ({name, showCountryClicked}) => {
    console.log('Component Country props:', name);
    
    return (
        <React.Fragment>
            <p>{name} <button onClick={() => showCountryClicked(name)} >show</button></p>
        </React.Fragment>
    )
}

export default Country