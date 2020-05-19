import React from 'react';
import Country from '../components/Country'
import { Card } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'


const Collection = (props) => {
    console.log(props.location.countryData)
    if (props.location.countryData) {
        return (
            <Row className="justify-content-md-center">

                {props.location.countryData.map((country, index) => { 
                    return (
                        <Col xs={12} sm={6} md={4} lg={3} key={index}>
                            <Card>
                                <Country key={index} id={index} country={country} /> 
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        )
    } else {
        return <div>Return to Home</div>
    }
}

export default Collection
