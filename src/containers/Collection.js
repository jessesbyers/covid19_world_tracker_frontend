import React from 'react';
import Country from '../components/Country'
import { Card } from 'react-bootstrap'


const Collection = (props) => {
        if (props.location.countryData) {
            return (
                props.location.countryData.map((country, index) => { 
                    return (
                        <Card>
                            <Country id={index} country={country} /> 
                        </Card>
                    )
                })
            )
        } else {
            return <div>Return to Home</div>
        }
}

export default Collection
