 import React from "react"
 import Part from "./Part"

 const Content = ({parts}) => {
    console.log('Component Content props:', parts);
    return (
        <div id="parts">
            {parts.map((part, i) =>
                <Part key={i} part={part} />
            )}
        </div>
    )
  }

  export default Content