import React, { useEffect } from 'react';
import DrawBar from './DrawBar'

const Viz = (props) => {
    console.log(props)

    useEffect( () => {

        DrawBar(props.countryName, props.totalCases, props.dailyData, props.id, props.caseType)
    }, [props])

    return (
        <div className={"viz" + props.id} ></div>
    )
}

export default Viz