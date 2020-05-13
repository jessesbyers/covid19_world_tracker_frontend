import * as d3 from 'd3'
import React from 'react'

// TO DOS:
    // make svg size responsive
    // 

const Draw = (countryName, totalCases, dailyData) => {
    console.log(countryName)
    console.log(totalCases)
    console.log(dailyData)
    // const formattedDate = new Date(dailyData[0][0].Date).toLocaleDateString()
    console.log(d3)

    // const width = Math.max(document.documentElement.clientWidth, window.innerWidth)
    // const height = Math.max(document.documentElement.clientHeight, window.innerHeight)
    const width = 700
    const height = 500


    d3.select(".viz").append("svg")
    // set height and width to be responsive
        // .attr("viewBox", `0 0 width height`)
        .attr("height", height)
        .attr("width", width)
        .attr("id", "svg-viz")







    // return (
    //     <div>DRAW test </div>
    // )
}

export default Draw

// DO NOT DELETE: RAW DATA for VISUALIZATIONS
    // return (        
    //     dailyData.map( days => {
    //         return (
    //             <div>
    //                 <h3>{countryName}</h3>
        //             <h5>{formattedDate} First Reported Case</h5>

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