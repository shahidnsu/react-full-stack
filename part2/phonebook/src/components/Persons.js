import React from 'react'
import Person from  './Person';

const Persons = ({person}) => {
    return(
        <div>
        <ul>
        {person.map(single => 
        {
           return <Person key={single.name} singlePerson={single.name} phoneNumber ={single.number} />

        })}
        </ul>
        
       </div>
      
    )

}
export default Persons