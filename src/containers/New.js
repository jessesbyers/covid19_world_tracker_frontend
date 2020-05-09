import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from "react-redux";
import CountryDropdown from '../components/CountryDropdown'
import Collection from '../containers/Collection'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';


const New = () => {
    const [countries, setCountries] = useState([]);
 
    useEffect( () => {
    // Code for fetching countries directly from database
        async function fetchData() {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };

            await fetch("https://api.covid19api.com/countries", requestOptions)
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
            <h3>Choose Multiple Countries for your Collection:</h3>
            <CountryDropdown options={options} />
        </div>
    )
}

export default New