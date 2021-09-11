import React from 'react';

import Countries  from './Countries';


const CountriesSearch =({countries , searchTerm}) => {
    
    let single = []
    
    countries.map(country => {
        
        if(country.name.toLowerCase().includes(searchTerm.toLowerCase()))
        {
                  single.push(country)
        }
        return single
        
    })
    
    return(
        <div>
            <Countries singleCountry={single} />
        </div>

    )

    

    
  
    

    
    

    

}
export default CountriesSearch