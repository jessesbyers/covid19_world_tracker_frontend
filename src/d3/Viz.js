import React, { useEffect } from 'react';
import Draw from './Draw'

const Viz = (props) => {

    useEffect( () => {
        Draw(props.countryName, props.totalCases, props.dailyData)
    }, [props])

    return <div className="viz"></div>
}

export default Viz