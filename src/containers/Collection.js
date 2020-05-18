import React from 'react';
import Country from '../components/Country'
import { Card } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import {Row} from 'react-bootstrap'


const Collection = (props) => {
        if (props.location.countryData) {
            return (
                <Row >

                    {props.location.countryData.map((country, index) => { 
                        return (
                            <Col sm={12} md={4} lg={3}>

                                <Card>
                                    <Country id={index} country={country} /> 
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
