import React from 'react';
import Viz from '../d3/Viz'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Loader } from './Loader'
import { active } from 'd3';

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


    // need to refactor to merge entries for each day
        const array = []
        const parseData = (stateData, array) => {
            stateData.forEach( day => {
                const date = day.Date.substring(0, 10)
                if (!array.includes(date)) {
                    array.push(date)
                }
            })

            const dateArray = array.map(date => stateData.filter(day =>  day.Date.substring(0,10) === date))

            const parsedData = dateArray.map( (d, index) => {
                const dayCount = index + 1
                const date = new Date(d[0].Date)

                const total = () => {
                    let sum = 0
                    for (let element of d) {
                        sum += element.Confirmed
                    }
                    return sum
                }

                const active = () => {
                    let sum = 0
                    for (let element of d) {
                        sum += element.Active
                    }
                    return sum
                }

                const recovered = () => {
                    let sum = 0
                    for (let element of d) {
                        sum += element.Recovered
                    }
                    return sum
                }

                const deaths = () => {
                    let sum = 0
                    for (let element of d) {
                        sum += element.Deaths
                    }
                    return sum
                }

                return {dayCount, date, total: total(), active: active(), recovered: recovered(), deaths: deaths()}
            })
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