import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'



const CountryDropdown = (props) => {

    const [collection, setCollection] = useState([]);
    const [countryData, setCountryData] = useState([]);
    // const [flags, setFlags] = useState([])


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
                // console.log(event.target.value)
                // setFlags([...flags, event.target.value.split(",")[2]])
                fetchCountry(event.target.value.split(",")[0], event.target.value.split(",")[1])}}>

                <option placeholder="Choose a Country">Choose a Country</option>
                {props.options.map(option => (
                    <option
                    id={props.id}
                    key={option.value}
                    value={[option.value, option.name, option.flagCode]}
                    >
                    {/* {<img src="https://www.countryflags.io/be/flat/16.png"/>} */}
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

            <Row>

                {collection.map(country => {
                    console.log(collection)
                    const flagUrl = `https://www.countryflags.io/${country[1]}/flat/64.png`

                    return (
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <Card className="text-center">
                                <Card.Header>{country[0]}</Card.Header>

                                <Card.Img src={flagUrl}></Card.Img>
                                
                            </Card>
                        </Col>
                    )
            })}
            </Row>

        </div>
    )
}

export default CountryDropdown



