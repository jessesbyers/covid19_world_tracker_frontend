import React, { useState } from 'react';
import { Redirect } from "react-router"

import Viz from '../d3/Viz'
import { Card } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { selectAll } from 'd3'



const Show = (props) => {
    console.log(props)
    const [caseType, setCaseType] = useState("");


    if (props.location.countryName) {
        return (
            <div> 
                <Row className="justify-content-md-center">
                    <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="cases tile" value="total">Total Cases</button>
                    <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="activee tile" value="active"> Active Cases</button>
                    <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="recovered tile" value="recovered">Recovered Cases</button>
                    <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="deaths tile" value="deaths">Deaths</button>
                </Row>

                <Row className="justify-content-md-center">
                    <Col xs="12" sm="12" md="10" lg="10" xl="9">
                    {/* <Col> */}
                    {/* <Col lg={9}> */}
                        <Card className="show">
                            <Viz countryName={props.location.countryName} totalCases={props.location.totalCases} dailyData={props.location.dailyData} id={props.location.slug} slug={props.location.slug} caseType={caseType}/>
                        </Card>
                    </Col>

                    <Col xs="12" sm="12" md="2" lg="2" xl="3">

                        <Card>
                            {/* <Button onClick={props.history.goBack(1)}>Go Back</Button> */}
                            </Card>
                    </Col>
                </Row>
            </div>
        )

    } else {
        return <Redirect to='/' />
    }
}

export default Show