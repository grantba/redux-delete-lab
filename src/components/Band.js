import React from 'react'

const Band = (props) => {
    return(
        <div>
            <li>{props.name.name}<button onClick={() => props.delete(props.id)}>Delete</button></li>
        </div>
    )
}

export default Band;