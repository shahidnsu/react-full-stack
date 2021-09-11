import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import CountriesSearch from './components/CountriesSearch';

const App = () => {

  //  state for countries

  const [countries, setCountries] = useState([])
 
  
// state for  searchTerm
  const [searchTerm,setSearchTerm] = useState('')

  

  // event handler for getting the searchTerm
  const getSearchTerm = (event) => {

    setSearchTerm(event.target.value)
    

  } 

  

  // calling the api using use effect hook

  const getCountriesFromApi = () => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
    })
    
  }
  useEffect(getCountriesFromApi,[])
  return (
    <div>
      <h1>Welcome to NationBook</h1>
      <h3>Search in the input box to know your country</h3>
      <br></br>
      <input 
      value={searchTerm} 
      onChange ={getSearchTerm} 
      />
      <CountriesSearch countries={countries} searchTerm={searchTerm}  />
      
    </div>
  )
}

export default App;
