import React, { useEffect } from 'react';
import DrawBar from './DrawBar'

const Viz = ( {caseType, countryName, totalCases, dailyData, slug}) => {

    useEffect( () => {

        DrawBar(countryName, totalCases, dailyData, slug, caseType)
    }, [caseType])

    return (
        <div className={"viz" + slug} ></div>
    )
}

export default Viz