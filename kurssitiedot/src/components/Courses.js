import React from 'react'
import Course from './Course'

const Courses = ({courses}) => {
    console.log('Component Courses props:', courses);
    
    return (
        <div id="courses">
            {courses.map((course, i) => 
                <Course key={i} course={course} />)
            }
        </div>
    )
}

export default Courses