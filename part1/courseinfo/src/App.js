import './App.css';


const App = () => {

  // header component 

  const Header = (props) => {
    return(
      <div>
        <p>course name is {props.course}</p>
      </div>

    )
    
  }

  const Content = (props) => {
    return(
      <div>
        <p>course name is {course.parts[0].name} total exercise {course.parts[0].exercises} </p>
       <p> course name {course.parts[1].name} total exercise {course.parts[1].exercises} </p>
       <p> course name {course.parts[2].name} total exercise {course.parts[2].exercises}</p>
      </div>
    )

  }

  
  
  const Total = (props) =>{
    return (
      <div>
        <p>course total exercise is {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
      </div>
    )
  }

  
  
const course ={
  name : 'Half stack development',

   parts : [
 {
  name : 'Fundaments of React',
  exercises : 10
 },
 {
  name : 'Using props to pass data',
  exercises : 7
   }  ,
   {
  name : 'State of a component',
  exercises : 14
   }

]
}

  return (
    <div>
        <Header course ={course.name}/>
        <Content parts ={course} />
        
        <Total parts ={course} />
    </div>
  )
  
}


export default App;
