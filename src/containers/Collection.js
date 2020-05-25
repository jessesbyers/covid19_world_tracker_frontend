import React, { useState } from 'react';
import { Redirect } from "react-router"
import Country from '../components/Country'
import { Card } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'


const Collection = (props) => {
    const [caseType, setCaseType] = useState("");

    if (props.location.countryData) {
        return (
            <div>
                <Row className="justify-content-md-center">
                    <button onClick={event => setCaseType(event.target.value)} className="cases tile" value="total">Total Cases</button>
                    <button onClick={event => setCaseType(event.target.value)} className="activee tile" value="active"> Active Cases</button>
                    <button onClick={event => setCaseType(event.target.value)} className="recovered tile" value="recovered">Recovered Cases</button>
                    <button onClick={event => setCaseType(event.target.value)} className="deaths tile" value="deaths">Deaths</button>
                </Row>

                <Row className="justify-content-md-center">

                    {props.location.countryData.map((country, index) => { 
                        return (
                            <Col xs={12} sm={6} md={4} lg={3} key={index}>
                                <Card>
                                    <Country key={index} id={index} country={country} caseType={caseType}/> 
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        )
    } else {
        return <Redirect to='/' />
    }
}

export default Collection
