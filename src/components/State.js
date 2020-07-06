import React from 'react';
import Viz from '../d3/Viz'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Loader } from './Loader'

const State = ({caseType, state, stateData, countryName}) => {
    state ? state = state : state = countryName
    // need to refactor total cases function after parsing data
    // const totalCases = () => stateData.length === 0 ? 0 : stateData[stateData.length-1].Confirmed
    const slug = (state) => {
        return state
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
        const parseData = (stateData, array) => {
            console.log(stateData)
            stateData.forEach( (day, index) => {
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

    // if (stateData) {
        return (
            // <Viz countryName={state} totalCases={totalCases()} dailyData={parseData(stateData, array)} caseType={caseType} slug={slug(state)}/>
            <Viz countryName={state} totalCases={100} dailyData={parseData(stateData, array)} caseType={caseType} slug={slug(state)}/>

        )
    // }
}

export default State


    // <NavLink to={{
    //     pathname: `/countries/${slug}`,
    //     slug
    //     }}>
    // </NavLink>