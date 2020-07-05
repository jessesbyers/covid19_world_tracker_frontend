import React from 'react';
import Viz from '../d3/Viz'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Loader } from './Loader'

const Province = ({caseType, province, provinceData}) => {
    console.log(provinceData)
    // const slug = province.split(" ").map(word => word.toLowerCase()).join("-")
    const totalCases = () => provinceData.length === 0 ? 0 : provinceData[provinceData.length-1].Confirmed
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
        const parseData = (provinceData, array) => {
            provinceData.forEach( (day, index) => {
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

    if (provinceData) {

        return (
                // <NavLink to={{
                //     pathname: `/countries/${slug}`,
                //     slug
                //     }}>
                    <Viz countryName={province} totalCases={totalCases()} dailyData={parseData(provinceData, array)} caseType={caseType} slug={slug(province)}/>
                // </NavLink>
        )
    } else {
        return <Loader />
    }
}

export default Province