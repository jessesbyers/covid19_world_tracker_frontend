import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'



const CountryDropdown = (props) => {

    const [collection, setCollection] = useState([]);
    const [countryData, setCountryData] = useState([]);

    const fetchCountry = (country, countryName) => {

        async function fetchData() {

            const requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };
            
            const response = await fetch(`https://api.covid19api.com/total/dayone/country/` + `${country}`, requestOptions)
            const data = await response.json()
            setCountryData(countryData => [...countryData, {[countryName]: [data], slug: country}])
            // .catch(error => console.log('error', error));
        }

        fetchData();
    }

    const invalid = () => collection.length === 0

    return (
        <div>
            <Row>
                <Col xs="12" sm="6" md="4" lg="3" xl="3">

                    <select onChange={ event => {setCollection([...collection, [event.target.value.split(",")[1], event.target.value.split(",")[2], event.target.value.split(",")[0]]]); 
                        fetchCountry(event.target.value.split(",")[0], event.target.value.split(",")[1])}}>

                        <option placeholder="Choose Multiple Countries to Create a Collection">Choose Multiple Countries to Create a Collection</option>
                        {props.options.map(option => (
                            <option
                            id={props.id}
                            key={option.value}
                            value={[option.value, option.name, option.flagCode]}
                            >
                            {option.name}
                            </option>
                        ))}
                    </select>

                    <NavLink 
                        to = {{
                            pathname: `/collection`,
                            countryData,
                            collection
                        }}>
                        <Button variant="dark" disabled={invalid()}>View Collection</Button>
                    </NavLink>

                </Col>


                {collection.map( (country, index) => {
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

        </div>
    )
}

export default CountryDropdown



