import React from "react";
import Part from './Part'

const Content  = ({parts}) => {
    return(
    <div>
        {parts.map((part,id) =>
        <Part key={id} part={part.name} exercise={part.exercises} />
        )}
    </div>
    )
}
export default Content