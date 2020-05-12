import React from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';


const Country = (props) => {
    console.log(props)
    const countryName = Object.keys(props.country)[0]
    console.log(props.country[Object.keys(props.country)][0].length)
    const totalCases = () => {
        if (props.country[countryName][0].length === 0) {
            return 0
        } else {
            return props.country[Object.keys(props.country)][0][props.country[Object.keys(props.country)][0].length-1].Confirmed
        }
    }
    
    console.log(totalCases())

        // replace this logic with rendering Chart component from D3, passing country day data as props
    // need logic to deal with countries with no cases!!!

    return (

        props.country[Object.keys(props.country)].map( days => {
            return (
                <div>
                    <h3>{countryName}</h3>
                    <h5>{totalCases()} Total Confirmed Cases</h5>
                    

                    {days.map((day, index) => {

                        return (
                            <div>
                                <p><strong>Day: {index + 1}</strong></p>
                                <p>Date: {day.Date}</p>
                                <p>Confirmed Cases: {day.Confirmed}</p>
                                <p>Active Cases: {day.Confirmed}</p>
                                <p>Recovered Cases: {day.Recovered}</p>
                                <p>Deaths: {day.Deaths}</p>
                            </div>
                        )
                    })}
                </div>
            )
        })
    )
}

export default Country