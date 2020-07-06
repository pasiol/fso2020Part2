import React from 'react'


const Header = ({courseName}) => {
    console.log("Component Header props:", courseName)
    return (
      <React.Fragment>
        <h1>
          {courseName}
        </h1>
      </React.Fragment>
    )
  }

  export default Header