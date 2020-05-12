import React, { useState, useEffect } from 'react';
import CountryDropdown from '../components/CountryDropdown'



const New = () => {
    const [countries, setCountries] = useState([]);
 
    useEffect( () => {
        async function fetchData() {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };

            await fetch("https://api.covid19api.com/countries", requestOptions)
            .then(response => response.json())
            .then(data => {
                setCountries(data)
            })
        }
        fetchData();
    }, []); 

    const options = countries.sort((a, b) => (a.Country > b.Country) ? 1 : -1).map( country => {
        return (
            {name: country.Country, value: country.Slug}
        )
    })

    return (
        <div>
            <h3>Choose Multiple Countries for your Collection:</h3>
            <CountryDropdown options={options} />
        </div>
    )
}

export default New