
import './App.css';
import React, {useState} from 'react';

const App = () => {
  const [good ,setGood] = useState(0)
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0) 

  const increaseGood = () => setGood(good+ 1)
  const increaseBad = () => setBad(bad+ 1)
  const increaseNeutral = () => setNeutral(neutral+ 1)
  

  return(
    <div>
    <h1>Give feedback</h1>
    
    <Button onClick={increaseGood} text="good" /> 
    <Button onClick={increaseBad} text="bad" /> 
    <Button onClick={increaseNeutral} text="neutral" /> 
    
    
      <Statistics good={good} bad ={bad} neutral ={neutral} />
      
    </div>
  )
}

const Statistics = (props) => {
  const {good, bad, neutral} = props

  const total = good + bad + neutral
  const average = total /3;
  const positiveFeedback = (good/total) *100
  
   if (good ===0 && bad === 0 && neutral === 0){
  return (
    <p>No feedback is given</p>
  )

  }
  return(
    <div>
    <h2>Statistics</h2>
     <StatisticLine text="good" value={good} />
     <StatisticLine text="bad" value={bad} />
     <StatisticLine text="neutral" value={neutral} />
     <StatisticLine text="all" value={total} />
     <StatisticLine text ="average" value ={average}/>
     <StatisticLine text ="positiveFeedback" value={positiveFeedback} />
    
      
    </div>
  )

}

// Button components

const Button = ({onClick,text}) => {

  return (
    
    <button onClick={onClick}> {text} </button>
    
  )

}

const StatisticLine =({text, value}) =>
{
  return(
    <div>
    <table>
    <tbody>
    <tr>
      <td>{text}</td>

      <td> {value} </td>
    </tr>
    </tbody>
    
    </table>
    

    
    </div>
  )
}

export default App;
