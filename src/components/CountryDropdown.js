import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { NavLink } from 'react-router-dom';
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

// need to convert collection to use redux and fix flag urls

const CountryDropdown = (props) => {

    // const [collection, setCollection] = useState([]);
    const [countryData, setCountryData] = useState([]);
    const countries = useSelector(state => state.countries)
    const collection = useSelector(state => state.collection)
    const dispatch = useDispatch()

    console.log(countries)


    const fetchCountry = (country, countryName) => {

        async function fetchData() {

            const requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };
            
            const response = await fetch(`https://api.covid19api.com/total/country/` + `${country}`, requestOptions)
            const data = await response.json()
            const parsedData = data.filter(day => day.Confirmed > 0)
            setCountryData(countryData => [...countryData, {[countryName]: [parsedData], slug: country}])
        }

        fetchData();
    }

    const invalid = () => collection.length === 0

    return (
        <Row>
            <Col xs="12" sm="6" md="4" lg="3" xl="3">

                <select onChange={dispatch({ type: 'addCountryToCollection', payload: event.target.value })}
                fetchCountry(event.target.value.split(",")[0], event.target.value.split(",")[1])}>
                    

                    <option placeholder="Choose a Collection of Countries">Choose a Collection of Countries</option>
                    {console.log(countries)}
                    {countries.sort((a, b) => (a.Country > b.Country) ? 1 : -1).map(country => (
                        <option
                            id={country.Slug}
                            key={country.Slug}
                            value={[country.Slug, country.Country, country.IS02]}
                        >
                        {country.Country}
                        </option> 
                    ))}
                </select>



                <NavLink 
                    to = {{
                        pathname: `/collection`,
                        countryData,
                        collection
                    }}>
                    <button className="dark" disabled={invalid()}>View Collection</button>
                </NavLink>

            </Col>


            {collection.map( (country, index) => {
                console.log(country)
                const flagUrl = `https://disease.sh/assets/img/flags/${country[1].toLowerCase()}.png`
                const worldUrl = `https://freesvg.org/img/Globe-Icon-Umber.png`
                const slug = country[2]

                return (

                    <Col xs={12} sm={6} md={4} lg={3} key={index}>

                        <Card>
                            <Card.Header>{country[0]}</Card.Header>

                            <Card.Img key={slug} src={flagUrl} onError={(e)=>{ 
                                if (e.target.src !== worldUrl) {
                                    e.target.src=worldUrl;}
                                }}/>
                        </Card>
                    </Col>

                )
            })}

        </Row>

    )
}

export default CountryDropdown



