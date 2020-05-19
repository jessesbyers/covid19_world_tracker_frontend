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
        console.log(props)

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
            {console.log(props)}
            <select onChange={ event => {setCollection([...collection, [event.target.value.split(",")[1], event.target.value.split(",")[2]]]); 
                fetchCountry(event.target.value.split(",")[0], event.target.value.split(",")[1])}}>

                <option placeholder="Choose a Country">Choose a Country</option>
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
                    countryData
                    
                }}>
                <Button variant="dark">View Collection</Button>
            </NavLink>

            <Row className="justify-content-md-center">

                {collection.map(country => {
                    const flagUrl = `https://www.cia.gov/library/publications/the-world-factbook/attachments/flags/${country[1]}-flag.gif`
                    const worldUrl = `https://freesvg.org/img/Globe-Icon-Umber.png`
                    return (
                        <Col xs={4} sm={4} md={3} lg={2}>
                            <Card>
                                <Card.Header>{country[0]}</Card.Header>

                                <Card.Img src={flagUrl} onError={(e)=>{ 
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



