import React from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';


const Country = (props) => {
    // replace this logic with rendering Chart component from D3, passing country day data as props

    return (

        props.country[Object.keys(props.country)].map( days => {
            return (
                <div>
                    <h3>TEST COUNTRY: {days[0].Country}</h3>

                    {days.map((day, index) => {

                        return (
                            <div>
                                <p><strong>Day: {index + 1}</strong></p>
                                <p>Date: {day.Date}</p>
                                <p>Confirmed Cases: {day.Confirmed}</p>
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