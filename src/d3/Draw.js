import * as d3 from 'd3'
import React from 'react'

const Draw = (countryName, totalCases, dailyData) => {
    console.log(countryName)
    console.log(totalCases)
    console.log(dailyData)
    console.log(d3)

    return (
        <div>DRAW test</div>
    )
}

export default Draw

// DO NOT DELETE: RAW DATA for VISUALIZATIONS
    // return (        
    //     dailyData.map( days => {
    //         return (
    //             <div>
    //                 <h3>{countryName}</h3>
    //                 <h5>{totalCases} Total Confirmed Cases</h5>
                    

    //                 {days.map((day, index) => {

    //                     return (
    //                         <div>
    //                             <p><strong>Day: {index + 1}</strong></p>
    //                             <p>Date: {day.Date}</p>
    //                             <p>Confirmed Cases: {day.Confirmed}</p>
    //                             <p>Active Cases: {day.Confirmed}</p>
    //                             <p>Recovered Cases: {day.Recovered}</p>
    //                             <p>Deaths: {day.Deaths}</p>
    //                         </div>
    //                     )
    //                 })}
    //             </div>
    //         )
    //     })
    // )