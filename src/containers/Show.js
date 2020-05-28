import React, { useState } from 'react';
import { Redirect } from "react-router"

import Viz from '../d3/Viz'
import { Card } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

import { selectAll } from 'd3'


const Show = (props) => {
    const [caseType, setCaseType] = useState("");


    if (props.location.countryName) {
        return (
            <div>
                <Row className="justify-content-md-center">
                <Col sm="12" md="3" lg="3" xl="3">
                        <Card>
                            <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="cases block" value="total">Total Cases</button>
                            <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="deathsPerOneMillion block" value="deaths">Deaths</button>
                            <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="activee block" value="active"> Active Cases</button>
                            <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="recovered block" value="recovered">Recovered Cases</button>


                            <NavLink
                                to = {{
                                    pathname: `/collection`,
                                    countryData: props.location.collection
                                }}>
                                <button className="reset block">Return to Collection</button>
                            </NavLink>
                        </Card> 
                    </Col>

                    <Col sm="12" md="9" lg="9" xl="9" >
                        <Card className="show">
                            <Viz countryName={props.location.countryName} totalCases={props.location.totalCases} dailyData={props.location.dailyData} id={props.location.slug} slug={props.location.slug} caseType={caseType}/>
                        </Card>
                    </Col>
                </Row>
            </div>
        )

    } else {
        // return <Redirect to='/' />
        return <Redirect to={process.env.PUBLIC_URL} />
        // return <h3>Use the Buttons Above to Get Started</h3>
    }
}

export default Show