import React from 'react'
import Draw from './Draw'

const Viz = (props) => {
    console.log(props.countryName)
    console.log(props.totalCases)
    console.log(props.dailyData)
    return (
        <div className="viz">TEST</div>
    )


// DO NOT DELETE: RAW DATA for VISUALIZATIONS
    // return (        
    //     props.dailyData.map( days => {
    //         return (
    //             <div>
    //                 <h3>{props.countryName}</h3>
    //                 <h5>{props.totalCases} Total Confirmed Cases</h5>
                    

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


}

export default Viz