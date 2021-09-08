
import { useState } from 'react';
import './App.css';
import Persons from './components/Persons';
import Search from './components/Search';

const App = () => {

  const [person, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
   
  // this set the set of new name
  const [newName, setNewName] = useState('')

  // this set state of the new phone number 
  const [newPhoneNumber ,setNewNumber] = useState('')

  // this set state for search items
  const [searchTerm, setSearchTerm] = useState('')

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

    // this function checks if the value already contains the array of objects
    // if it is length is zero then  value doesn't contain in the array of objects
    const filteredPerson = person.filter((p)=>{
      return p.name === newName
     })
     
     if(filteredPerson.length !==0){
       alert(`${newName} is already in the phoneBook`)
     }
    else {
    const addNameNumber = 
    {
      name: newName,
      phone:newPhoneNumber
    }
     
     
      
      
      setPersons(person.concat(addNameNumber))
      setNewName('')
      setNewNumber('')

      
  }
  
  } 
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
      <Persons person ={person} />
      
      
      
     
    
      
    </div>
  )
}
   

export default App;
