import React from 'react';
import Band from './Band';

const Bands = props => {
    return(
        props.bands.map(band => <Band key={band.id} {...band} delete={props.delete}/>)
    )
    // if (props.bands !== undefined) {
    //     return(
    //         <div>{props.bands.map(band => <Band key={band.id} id={band.id} name={band.name.name} delete={props.delete}/>)}</div>
    //     )
    // } else {
    //     return null
    // }
}

export default Bands;