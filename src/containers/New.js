import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import CountryDropdown from '../components/CountryDropdown'
import Button from 'react-bootstrap/Button';

const New = () => {
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
            <h1>NEW Container component placeholder</h1>
            <h3>Choose 4 Countries for your Collection:</h3>
            <CountryDropdown options={options} />
            <CountryDropdown options={options} />
            <CountryDropdown options={options} />
            <CountryDropdown options={options} />
            <Button variant="dark">Create a Collection</Button>
        </div>
    )
}

export default New