import React, { useEffect } from 'react';
import Draw from './Draw'

const Viz = (props) => {

    useEffect( () => {
        Draw(props.countryName, props.totalCases, props.dailyData)
    })

    return (
        <div className="viz">TEST</div>
    )
}

export default Viz