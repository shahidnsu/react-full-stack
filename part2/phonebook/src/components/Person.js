import React from 'react'

const Person =({singlePerson, phoneNumber}) => {
    
    return (
        <div>
            <li>{singlePerson} ==={phoneNumber}</li>
        </div>
    )

}
export default Person