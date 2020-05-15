import React from 'react';
import Viz from '../d3/Viz'
// import Button from 'react-bootstrap/Button';
// import { NavLink } from 'react-router-dom';


const Country = (props) => {
    const countryName = Object.keys(props.country)[0]

    const dailyData = props.country[Object.keys(props.country)]

    const totalCases = () => {
        if (props.country[countryName][0].length === 0) {
            return 0
        } else {
            return props.country[Object.keys(props.country)][0][props.country[Object.keys(props.country)][0].length-1].Confirmed
        }
    }

    const array = []

    const parseData = (data, array) => {
        console.log(data[0])
        data[0].forEach( (day, index) => {
            array.push({
                dayCount: index + 1,
                date: new Date(day.Date),
                total: day.Confirmed, 
                active: day.Active, 
                recovered: day.Recovered, 
                deaths: day.Deaths
            })
        })
        return array
    }


    return (
        <Viz countryName={countryName} totalCases={totalCases()} dailyData={parseData(dailyData, array)}/>
    )

}

export default Country
