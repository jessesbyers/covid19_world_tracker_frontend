import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import SelectSearch from 'react-select-search';

const Home = () => {
    const [countries, setCountries] = useState([]);
 
    useEffect( () => {
        async function fetchData() {
            await fetch("https://api.covid19api.com/countries")
            .then(response => response.json())
            .then(data => {
                console.log(data)
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
            {console.log(countries)}
            {console.log(options)} 
            <select>
                <option placeholder="Choose a Country">Choose a Country</option>
                {options.map(option => (
                    <option
                    key={option.value}
                    value={option.value}
                    >
                    {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Home