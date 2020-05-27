import React, { useEffect } from 'react';

import DrawMap from '../d3/DrawMap'
import MapInput from '../components/MapInput'

import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'


const Home = () => {

    useEffect( () => {
        DrawMap(); 
    }, [])

    return (
        <Row>
            <Col sm="12" md="3" lg="3" xl="3">
                <Card>
                    <MapInput />
                </Card>
            </Col>
            <Col sm="12" md="9" lg="9" xl="9" >
                <Card className="mapviz">

                </Card>
            </Col>
        </Row>
    )
}

export default Home

{/* <h1>HOME component placeholder</h1>
<h3>To Dos...</h3>
<ul>
    <li>render About / Instructions</li>
    <li>fix sizing on all pages</li>
    <li>fix rendering lag bug on Map (DisplayMapData)</li>
    <li>collapse button divs/spans into dropdown on small screens</li>
</ul> */} 