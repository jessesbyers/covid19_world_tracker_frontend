import React, { useState, useEffect } from 'react';
import Country from '../components/Country'


const Collection = (props) => {
    console.log(props)

    if (props.countriesData) {
        props.countriesData.map((country, index) => {
            return (
                <Country key={index} country={country} /> 
            )
        
        })
    } else {
        return null
    }
}

export default Collection
