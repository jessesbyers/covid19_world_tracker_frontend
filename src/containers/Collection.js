import React, { useState, useEffect } from 'react';
import Country from '../components/Country'


const Collection = (props) => {
    console.log(props.location.countryData);
        if (props.location.countryData) {
            return (
                props.location.countryData.map((country, index) => { return (<Country key={index} country={country} /> )})
            )
        } else {
            return <div>Return to Home</div>
        }
}

export default Collection
