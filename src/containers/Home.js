import React, { useState, useEffect } from 'react';
import DrawMap from '../d3/DrawMap'


const Home = (props) => {

    useEffect( () => {
        DrawMap()
    }, [])

    return <div className="mapviz"></div>
}

export default Home

{/* <h1>HOME component placeholder</h1>
<h3>To Dos...</h3>
<ul>
    <li>render About / Instructions</li>
    <li>create covid map component for home</li>
    <li>add forward and back navlinks to NavBar</li>
    <li>add background image for pages if no data present</li>
    <li>fix sizing on show page</li>
    <li></li>
</ul> */} 