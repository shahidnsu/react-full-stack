import React from 'react';




const CountriesSearch =({countries , searchTerm}) => {
    
    let single = []
    
    countries.map(country => {
        
        if(country.name.toLowerCase().includes(searchTerm.toLowerCase()))
        {
                  single.push(country)
        }
        return single
        
    }) 


    

    
  
    if (single.length === 1){
        return(
            <div>
                <h1>{single[0].name}</h1>
                <p>capital {single[0].capital}</p>
                <p>population {single[0].population}</p>
                <br></br>
                <h3>Languages</h3>
                {single[0].languages.map(sl => {
                    return <li key={sl.name}>{sl.name}</li>
                })}
                
               
            </div>
        )
    }
    else if(single.length > 10 ){
        return(
            <div>
                <p>Please be more specific</p>
            </div>
        )
    }
    else if(single.length <= 10) {
        return(
            <div>
                {single.map(s => {
                    return <li key={s.name}>{s.name}</li>
                    
                })}
            </div>
        )
    }
    else {
        return(
            <h2>sorry</h2>
        )
    }

    
    

    

}
export default CountriesSearch