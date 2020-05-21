import React, { useEffect } from 'react';
import DrawMap from '../d3/DrawMap'
import MapInput from '../components/MapInput'


const Home = () => {

    useEffect( () => {
        DrawMap(); 
    }, [])

    return <div className="mapviz"><MapInput /></div>
}

export default Home

{/* <h1>HOME component placeholder</h1>
<h3>To Dos...</h3>
<ul>
    <li>render About / Instructions</li>
    <li>add case data to covid map component for home</li>
    <li>add forward and back navlinks to NavBar</li>
    <li>add background image and NavLink (or Redirect) for pages if no data present</li>
    <li>fix sizing on show page</li>
    <li></li>
</ul> */} 