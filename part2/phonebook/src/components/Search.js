import React from 'react';

const Search = ({person, searchTerm}) => {
    // this for getting only the names from the array of objects
  const onlyNames = person.map(singlePerson => singlePerson.name);

  // this function checks if the name[0] is equal to the searchTerm
  const searchResult = onlyNames.filter(name => name[0].toLocaleLowerCase() ===searchTerm.toLocaleLowerCase())
  return (
      <div>
          {/* This  for showing the search result */}
       <ul>
        {searchResult.map((result,i) =>  <li key={result}>{result}</li> )}
      </ul>
      </div>
  )

}
export default Search