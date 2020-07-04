import React, { useState } from 'react';
import { Redirect } from "react-router"
import Country from '../components/Country'
import { Card } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { selectAll } from 'd3'
import { useSelector, useDispatch } from 'react-redux'


const Collection = (props) => {
    const countryData = useSelector(state => state.countryData)

    const [caseType, setCaseType] = useState("");


    if (countryData) {
        return (
            <div>
                <Row >
                    <Col xs="12" sm="6" md="4" lg="3" xl="3">
                        <Card>
                            <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="cases block" value="total">Total Cases</button>
                            <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="deathsPerOneMillion block" value="deaths">Deaths</button>
                            <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="activee block" value="active"> Active Cases</button>
                            <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="recovered block" value="recovered">Recovered Cases</button>
                        </Card>
                    </Col>

                    {countryData.map((country, index) => { 
                        console.log(country)
                        return (
                            <Col xs={12} sm={6} md={4} lg={3} key={index}>
                                <Card>
                                    <Country key={index} caseType={caseType}/> 
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        )
    } else {
        // return <Redirect to='/' />
        return <Redirect to={process.env.PUBLIC_URL} />
        // return <h3>Use the Buttons Above to Get Started</h3>

    }
}

export default Collection
