import React from 'react';
import Viz from '../d3/Viz'
// import Button from 'react-bootstrap/Button';
// import { NavLink } from 'react-router-dom';


const Country = (props) => {
    const countryName = Object.keys(props.country)[0]
    const totalCases = () => {
        if (props.country[countryName][0].length === 0) {
            return 0
        } else {
            return props.country[Object.keys(props.country)][0][props.country[Object.keys(props.country)][0].length-1].Confirmed
        }
    }

    return (
        <Viz countryName={countryName} totalCases={totalCases()} dailyData={props.country[Object.keys(props.country)]}/>
    )

}

export default Country

