import react from "react";

const Country = ({single}) => {
    console.log(single)

    return(
        <div>
            <h1>{single.name}</h1>
            <h2>{single.capital}</h2>
            <h3>{single.population}</h3>
            <br></br>
            <h4>Languages</h4>
            <ul>
                {single.languages.map(sl =>{
                    return <li key ={sl.name}> {sl.name}</li>

                })}
            </ul>
            </div>
    )
        
    



}

export default Country;