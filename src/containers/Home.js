import React, { useEffect } from 'react';
import DrawMap from '../d3/DrawMap'
import MapInput from '../components/MapInput'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'




const Home = () => {

    useEffect( () => {
        DrawMap(); 
    }, [])

    return (
        <Row>
            <Col sm="12" md="3" lg="3" xl="3"><MapInput /></Col>
            <Col sm="12" md="9" lg="9" xl="9" className="mapviz"></Col>
        </Row>
    )
}

export default Home

{/* <h1>HOME component placeholder</h1>
<h3>To Dos...</h3>
<ul>
    <li>render About / Instructions</li>
    <li>add forward and back navlinks to NavBar</li>
    <li>add background image and NavLink (or Redirect) for pages if no data present</li>
    <li>fix sizing on all pages</li>
    <li>center justify map legends</li>
    <li>remove circles, title, and legend before displaying new map data</li>
    <li>identify countries with missing data (shading)</li>
    <li>add resources to readme</li>
</ul> */} 