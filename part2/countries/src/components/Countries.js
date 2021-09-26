import React from 'react';
import Country from './Country';

const Countries = ({singleCountry}) => {

    const show =(single) => 
    {   
        
         return <Country single={single} />
    }

    if (singleCountry.length === 1){
        return(
            <div>
                <h1>{singleCountry[0].name}</h1>
                <p>capital {singleCountry[0].capital}</p>
                <p>population {singleCountry[0].population}</p>
                <br></br>
                <h3>Languages</h3>
                {singleCountry[0].languages.map(sl => {
                    return <li key={sl.name}>{sl.name}</li>
                })}
                <br></br>
                <img src= {singleCountry[0].flag} alt="national flag"/>
                
               
            </div>
        )
    }
    else if(singleCountry.length > 10 ){
        return(
            <div>
                <p>Please be more specific</p>
            </div>
        )
    }
    else if(singleCountry.length <= 10) {
        return(
            
            <div>
            {singleCountry.map(single => {
              return <ul>
               <li>{single.name} <button onClick={()=> show(single)}>show</button></li>

        
               </ul>
            })}
                
            </div>
        )
    }
    else {
        return(
            <h2>sorry cannot find your country</h2>
        )
    }
    
}
export default Countries