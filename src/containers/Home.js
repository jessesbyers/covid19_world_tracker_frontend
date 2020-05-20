import React, { useState, useEffect } from 'react';
import DrawMap from '../d3/DrawMap'


const Home = (props) => {
    const [countryResults, setCountryResults] = useState([])
    console.log(countryResults)


    useEffect( () => {

        async function fetchData() {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                   }
              }

            await fetch('/api/country_region', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data.results)
                setCountryResults(data.results)
            })
        }
        fetchData();

        DrawMap(); 
    }, [])

    return <div className="mapviz"></div>
}

export default Home

{/* <h1>HOME component placeholder</h1>
<h3>To Dos...</h3>
<ul>
    <li>render About / Instructions</li>
    <li>add case data to covid map component for home</li>
    <li>add forward and back navlinks to NavBar</li>
    <li>add background image for pages if no data present</li>
    <li>fix sizing on show page</li>
    <li></li>
</ul> */} 