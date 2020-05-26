import React, { useState } from 'react';
import { Redirect } from "react-router"
import Country from '../components/Country'
import { Card } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { selectAll } from 'd3'



const Collection = (props) => {
    const [caseType, setCaseType] = useState("");

    if (props.location.countryData) {
        return (
            <div>
                <Row className="justify-content-md-center">
                    <Col xs="12" sm="6" md="4" lg="3" xl="3">
                        <Card>
                            <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="cases block" value="total">Total Cases</button>
                            <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="activee block" value="active"> Active Cases</button>
                            <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="recovered block" value="recovered">Recovered Cases</button>
                            <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="deaths block" value="deaths">Deaths</button>
                        </Card>
                    </Col>

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
