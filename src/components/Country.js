import React from 'react';
import Viz from '../d3/Viz'
import { useSelector } from 'react-redux'

import { NavLink } from 'react-router-dom';

const Country = ({caseType, country}) => {
    const collection = useSelector(state => state.collection)
    console.log(country)
    const countryName = Object.keys(country)[0]
    console.log(countryName)
    const dailyData = country[countryName]
    const slug = collection.find(obj => obj.country === countryName).slug
    console.log(slug)

    const totalCases = () => {
        console.log(dailyData)
        if (dailyData.length === 0) {
            return 0
        } else {
            console.log(dailyData[dailyData.length-1])
            return dailyData[dailyData.length-1].Confirmed
        }
    }

    const array = []

    const parseData = (data, array) => {
        data.forEach( (day, index) => {
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
                pathname: `/countries/${slug}`,
                // countryName,
                // totalCases: totalCases(),
                // dailyData: parseData(dailyData, array), 
                // slug: country.slug, 
                // id: country.slug,
                // collection: collection
            }}>
            <Viz countryName={countryName} totalCases={totalCases()} dailyData={parseData(dailyData, array)} caseType={caseType} slug={slug}/>
        </NavLink>
    )
}

export default Country

