import React from 'react';
import Viz from '../d3/Viz'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Loader } from './Loader'

const State = ({caseType, state, states, statesData, countryName}) => {
    state ? state = state : state = countryName
    const totalCases = () => statesData.length === 0 ? 0 : statesData[statesData.length-1].Confirmed
    const slug = (province) => {
        return province
        .toString()
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
    }

        const array = []
        const parseData = (statesData, array) => {
            statesData.forEach( (day, index) => {
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

    if (statesData) {
        return (
            <Viz countryName={state} totalCases={totalCases()} dailyData={parseData(statesData, array)} caseType={caseType} slug={slug(state)}/>

        )
    }
}

export default State


    // <NavLink to={{
    //     pathname: `/countries/${slug}`,
    //     slug
    //     }}>
    // </NavLink>