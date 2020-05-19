import React, { useEffect } from 'react';
import Draw from './Draw'

const VizShow = (props) => {
    // useEffect( () => {
    //     Draw(props.countryName, props.totalCases, props.dailyData, props.id)
    // }, [props])

    return <div className={"viz" + props.id}></div>
}

export default VizShow