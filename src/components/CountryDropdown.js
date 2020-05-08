import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';



const CountryDropdown = (props) => {
    const [collection, setCollection] = useState([]);
    console.log(collection)

    return (
        <div>
            <select onChange={ event => setCollection([...collection, event.target.value])}>
            {/* <select onChange={event => {setCountry(event.target.value); renderCountry(event.target.value)}}> */}
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

            <NavLink 
                to={{
                    pathname: `/collections`,
                    collection}}>
                <Button variant="dark">View Collection</Button>
            </NavLink>

            {collection.map( (country, index) => {
                return (
                <p key={index}>{country}</p>
                )
            })}

        </div>
    )
}

export default CountryDropdown



