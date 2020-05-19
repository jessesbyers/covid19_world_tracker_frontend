import React from 'react';
import VizShow from '../d3/Viz'
import Viz from '../d3/Viz'



const Show = (props) => {
    console.log(props)

    // return <VizShow countryName={props.location.countryName} totalCases={props.location.totalCases} dailyData={props.location.dailyData} id={props.location.slug} slug={props.location.slug} />
    return <Viz countryName={props.location.countryName} totalCases={props.location.totalCases} dailyData={props.location.dailyData} id={props.location.slug} slug={props.location.slug}/>
    // return (
    //     <div>TEST</div>
    // )
}

export default Show