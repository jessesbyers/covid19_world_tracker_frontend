import React, { useState, useEffect } from 'react';
import CountryDropdown from '../components/CountryDropdown'

import { Card } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'



const New = () => {
    const [countries, setCountries] = useState([]);
 
    useEffect( () => {
        async function fetchData() {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };

            const response = await fetch("https://api.covid19api.com/countries", requestOptions)
            const data = await response.json()
            setCountries(data)
        }
        fetchData();
    }, []); 

    const options = countries.sort((a, b) => (a.Country > b.Country) ? 1 : -1).map( country => {
        return (
            {name: country.Country, value: country.Slug, flagCode: country.ISO2}
        )
    })

    return (
        <div>
            <CountryDropdown options={options} />
        </div>
    )
}

export default New