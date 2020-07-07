import React from "react"

const Person = ({name, number}) => {
    console.log('Component Person props:', name, number);
    return (
        <React.Fragment>
            <p>{name} {number}</p>
        </React.Fragment>
    )
}


export default Person