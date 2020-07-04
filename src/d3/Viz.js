import React, { useEffect } from 'react';
import DrawBar from './DrawBar'

const Viz = ( {caseType, countryName, totalCases, dailyData, slug}) => {
    console.log(dailyData)

    useEffect( () => {

        DrawBar(countryName, totalCases, dailyData, slug, caseType)
    }, [])

    return (
        <div className={"viz" + slug} ></div>
    )
}

export default Viz