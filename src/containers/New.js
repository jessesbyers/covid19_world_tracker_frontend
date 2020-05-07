import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import CountryDropdown from '../components/CountryDropdown'


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
            <CountryDropdown options={options} />
            <CountryDropdown options={options} />
            <CountryDropdown options={options} />
            <CountryDropdown options={options} />
            <button className="btn btn-primary">Create a Collection</button>
        </div>
    )
}

export default New