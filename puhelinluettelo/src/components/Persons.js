import React from "react"
import Person from "./Person"

const Persons = ({filteredList}) => {
    return (
        <React.Fragment>
            <h2>Numbers</h2>
            <div id="numbers">
                {filteredList.map((person) =>
                    <Person key={person.name} name={person.name} number={person.number} />
                )}
            </div>
        </React.Fragment>
    )
}


export default Persons