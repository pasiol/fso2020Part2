import React from "react"

const Total = ({parts}) => {
    console.log('Component Total props:', parts);
      

    const total = (sum, part) => {
        return parseInt(part.exercises)
    }
    return (
      <div>
        <p><strong>Total of exercises {parts.reduce(total, 0)}</strong></p>
      </div>
    )
  }

export default Total