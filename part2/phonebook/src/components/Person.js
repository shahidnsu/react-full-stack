import React from 'react'

const Person =({singlePerson, phoneNumber,deleteEntry}) => {
    
    return (
        <div>
            <li>
            {singlePerson} ==={phoneNumber}
            <button onClick={deleteEntry}> delete</button>
            </li>
        </div>
    )

}
export default Person