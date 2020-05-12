import React from 'react';
import Country from '../components/Country'


const Collection = (props) => {
        if (props.location.countryData) {
            return (
                props.location.countryData.map((country, index) => { return (<Country key={index} country={country} /> )})
            )
        } else {
            return <div>Return to Home</div>
        }
}

export default Collection
