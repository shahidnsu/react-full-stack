import React from 'react'
import Person from  './Person';

const Persons = ({person, deleteEntry}) => {
    return(
        <div>
        <ul>
        {person.map(single => 
        {
           return <Person key={single.id} singlePerson={single.name} phoneNumber ={single.number}  deleteEntry={() =>deleteEntry(single.id)}/>

        })}
        </ul>
        
       </div>
      
    )

}
export default Persons