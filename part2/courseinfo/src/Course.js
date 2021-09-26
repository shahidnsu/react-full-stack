import React from 'react'
import Header from './Header'
import Total from './Total'
import Content from './Content'


const Course =({course}) => {
    return(
    <div>
        {course.map (singleCourse => 
        <div key ={singleCourse.id}>
        <Header name={singleCourse.name} />
        <Content parts ={singleCourse.parts} />
        <Total parts ={singleCourse.parts} />

        </div>
        )}
    </div>
    )
}
export default Course