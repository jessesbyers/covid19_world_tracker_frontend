import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const CountryDropdown = (props) => {
    const [collection, setCollection] = useState([]);
    const [countryData, setCountryData] = useState([]);

    const fetchCountry = (country, countryName) => {

        async function fetchData() {

            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };
            await fetch(`https://api.covid19api.com/total/dayone/country/` + `${country}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                setCountryData(countryData => [...countryData, {[countryName]: [data]}])
            })
            .catch(error => console.log('error', error));
        }

        fetchData();
    }

    return (
        <div>
            <select onChange={ event => {setCollection([...collection, event.target.value.split(",")[1]]); 
                fetchCountry(event.target.value.split(",")[0], event.target.value.split(",")[1])}}>

                <option placeholder="Choose a Country">Choose a Country</option>
                {props.options.map(option => (
                    <option
                    id={props.id}
                    key={option.value}
                    value={[option.value, option.name]}
                    >
                    {option.name}
                    </option>
                ))}
            </select>

            <NavLink 
                to = {{
                    pathname: `/collection`,
                    countryData
                    
                }}>
                <Button variant="dark">View Collection</Button>
            </NavLink>

            {collection.map(country => <p>{country}</p>)}

        </div>
    )
}

export default CountryDropdown



