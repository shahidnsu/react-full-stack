
import { useState,useEffect } from 'react';
import './App.css';
import Persons from './components/Persons';
import Search from './components/Search';

import namePhone from './services/namePhone';


const App = () => {

  const [person, setPersons] = useState([])
   
  // this set the set of new name
  const [newName, setNewName] = useState('')

  // this set state of the new phone number 
  const [newPhoneNumber ,setNewNumber] = useState('')

  // this set state for search items
  const [searchTerm, setSearchTerm] = useState('')

  //button for deleting the entry from the phoneBook

  const deleteEntry =(id) => {
    
    const p = person.find(p => p.id ===id)
    const newEntries = person.filter(p => p.id !== id)
     
    const yesOrNo = window.confirm(`Delete the user ${p.name} ?`)
    if(yesOrNo === true){
      namePhone
      .deleteEntries(id)
      .then(p => {
        setPersons(newEntries)
        
      })
    }
    
  
  else {
    setPersons(person)
  }
}

  // function for fetching data from json server using useEffect hook

  

  useEffect(() => {
    namePhone
    .getAll()
    .then(response => {
      setPersons(response.data)
    })
  },[])

  // this handles new number input
  const handleNameChange = (event) => {
    setNewName(event.target.value)

  }

  // this handles new phone number input
  const handlePhoneNumber = (event) => {
    setNewNumber ( event.target.value)
  }

// this function handles  new name and phone number to get in the values
  const addNewNamePhoneNumber = (event) => {
//it prevents the default behaviour of from elements and also stops components to rerender
    event.preventDefault() 

    // this function checks if the value already contains in the array of objects
    // if it is length is zero then  value doesn't contain in the array of objects
    const filteredPerson = person.filter((p)=>{
      
      
      return p.name === newName
      
     })
     

     

     if(filteredPerson.length === 1){

     const overRide = window.confirm(`${filteredPerson[filteredPerson.length-1].name} is already added to phoneBook. replace the old number with new one`)

     if (overRide === true) {

      const addNameNumber = 
      {
        name: filteredPerson[filteredPerson.length-1].name,
        number:newPhoneNumber
        
      }
      namePhone
      .update(filteredPerson[filteredPerson.length-1].id, addNameNumber)
      .then(response => {
        const newP = person.filter((p=> p.id !== filteredPerson[filteredPerson.length-1].id))
        setPersons([...newP, addNameNumber])
      })

      
      setNewNumber('')
      setNewName('')
  
       }

     }
     else 
     {
      const addNameNumber = 
      {
        name: newName,
        number:newPhoneNumber,
        
      }
      namePhone
      .create(addNameNumber)
      .then(response => {
        setPersons(person.concat(response.data))
      })
      setNewNumber('')
      setNewName('')

     }
     
     
     
     
    
      
      
  
  } 


  //this function update the existing phone number with new one

  

 
  // this function handles the input of searchTerm
  const getInputValue = (event) => {
    setSearchTerm(event.target.value)


  }
  

  
  
  return(
    <div>
      <h1>PhoneBook</h1>
      
      <div>
      {/*this input  for search value*/}
        <input 
           value={searchTerm}
           onChange={getInputValue}
        />
      </div>
       <Search person ={person} searchTerm ={searchTerm} />


      <h2>Add a new</h2>
      <div>
        <form onSubmit={addNewNamePhoneNumber}>
          <div>

          {/*this input for newName */}
            name: <input 
            value={newName}
            onChange={handleNameChange} />
            </div>

            {/* this for phone input */}
            <div>number : <input  
             value ={newPhoneNumber}
            onChange={handlePhoneNumber}/>
            </div>
          
          <div>
            <button 
            type ="submit">add
            </button>
          </div>
        </form>
      </div>

     



      <h2>Numbers</h2>
      <Persons person ={person} deleteEntry={deleteEntry} />
      
      
      
     
    
      
    </div>
  )
}
   


export default App;
