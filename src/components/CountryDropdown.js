// need to split off into multiple components

import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { NavLink } from 'react-router-dom';
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

const CountryDropdown = (props) => {

    const countries = useSelector(state => state.countries)
    const collection = useSelector(state => state.collection)
    const dispatch = useDispatch()

    const fetchCountry = (event) => {
        const [slug, country, ISO2] = event.target.value.split(",") 

        async function fetchData() {

            const requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };
            
            // const response = await fetch(`https://api.covid19api.com/total/country/` + `${slug}`, requestOptions)
            const response = await fetch(`https://api.covid19api.com/total/country/` + slug, requestOptions)

            const data = await response.json()
            const parsedData = data.filter(day => day.Confirmed > 0)

            dispatch( { type: 'addCountryData', payload: { [country]: parsedData }} )
            dispatch( { type: 'addCountryToCollection', payload: {slug, country, ISO2}} )
        }
        fetchData();
    }

    const invalid = () => collection.length === 0

    return (
        <Row>
            <Col xs="12" sm="6" md="4" lg="3" xl="3">

                <select onChange={event => fetchCountry(event)}>
                
                    <option placeholder="Choose a Collection of Countries">Choose a Collection of Countries</option>
                    {countries.sort((a, b) => (a.Country > b.Country) ? 1 : -1).map(country => (
                        <option
                            id={country.Slug}
                            key={country.Slug}
                            value={[country.Slug, country.Country, country.ISO2]}
                        >
                        {country.Country}
                        </option> 
                    ))}
                </select>



                <NavLink to='/collection'>
                    <button className="dark" disabled={invalid()}>View Collection</button>
                </NavLink>

            </Col>


            {collection.map( (country, index) => {
                const flagUrl = `https://disease.sh/assets/img/flags/${country.ISO2.toLowerCase()}.png`
                const worldUrl = `https://freesvg.org/img/Globe-Icon-Umber.png`

                return (

                    <Col xs={12} sm={6} md={4} lg={3} key={index}>

                        <Card>
                            <Card.Header>{country.country}</Card.Header>

                            <Card.Img key={country.slug} src={flagUrl} onError={(e)=>{ 
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



