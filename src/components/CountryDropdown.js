import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Collection from '../containers/Collection'




const CountryDropdown = (props) => {
    const [collection, setCollection] = useState([]);
    const [countryData, setCountryData] = useState([]);
    const [countryDataCollection, setCountryDataCollection] = useState([]);


    const fetchCountry = (country) => {
        console.log("fetch country" + country)

        async function fetchData() {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };
            await fetch(`https://api.covid19api.com/total/dayone/country/` + `${country}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                console.log(country)
                setCountryData(countryData => [...countryData, {country: [data]}])
                // setCountryData({country: [data]})
            })
            .catch(error => console.log('error', error));

        }

        fetchData();
    }

    return (
        <div>
            <select onChange={ event => {setCollection([...collection, event.target.value]); fetchCountry(event.target.value)}}>
                <option placeholder="Choose a Country">Choose a Country</option>
                {props.options.map(option => (
                    <option
                    id={props.id}
                    key={option.value}
                    value={option.value}
                    >
                    {option.name}
                    </option>
                ))}
            </select>

            < Collection countries={collection}/>
            {/* {console.log(collection)} */}
            {console.log(countryData)}
            {/* {console.log(countryDataCollection)} */}




            {/* <NavLink 
                to={{
                    pathname: `/collection`,
                    collection}}>
                <Button variant="dark">View Collection</Button>
            </NavLink> */}

            {/* {collection.map( (country, index) => {
                return (
                <p key={index}>{country}</p>
                )
            })} */}

        </div>
    )
}

export default CountryDropdown



