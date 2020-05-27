import React from 'react';
import Viz from '../d3/Viz'

import { NavLink } from 'react-router-dom';



const Country = (props) => {
    const countryName = Object.keys(props.country)[0]
    const dailyData = props.country[countryName]

    const totalCases = () => {
        if (dailyData[0].length === 0) {
            return 0
        } else {
            return dailyData[0][dailyData[0].length-1].Confirmed
        }
    }

    const array = []

    const parseData = (data, array) => {
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
        <NavLink
            to = {{
                pathname: `/countries/${props.country.slug}`,
                countryName,
                totalCases: totalCases(),
                dailyData: parseData(dailyData, array), 
                slug: props.country.slug, 
                id: props.country.slug,
                collection: props.collection
            }}>
            <Viz countryName={countryName} totalCases={totalCases()} dailyData={parseData(dailyData, array)} id={props.country.slug} slug={props.country.slug} caseType={props.caseType}/>
        </NavLink>
    )
}

export default Country

