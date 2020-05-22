import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'
import DisplayMapData from '../d3/DisplayMapData'
import { ResetMapData}  from '../d3/ResetMapData'

const MapInput = () => {
    // disable button that is clicked / re-enable when another button is clicked
    // remove data layer when a new button is clicked
    const [countryResults, setCountryResults] = useState([])

    useEffect( () => {
        async function fetchData() {
            await fetch('https://corona.lmao.ninja/v2/countries')
            .then(response => response.json())
            .then(data => {
                setCountryResults(data)
            })
        }
        fetchData();
    }, [])

    // const displayMap = (caseType, caseTitle, data) => ResetMapData().then(DisplayMapData(caseType, caseTitle, data))
    


    return (
        <span>
            <Button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} value="cases">Total Cases</Button>
            <Button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} value="active">Active Cases</Button>
            <Button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} value="critical">Critical Cases</Button>
            <Button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} value="deaths">Total Deaths</Button>
            <Button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} value="recovered">Recovered Cases</Button>
            <Button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} value="tests">Number of Tests</Button>
<br/>
            <Button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} value="casesPerOneMillion">Total Cases Per One Million</Button>
            <Button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} value="activePerOneMillion">Active Cases Per One Million</Button>
            <Button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} value="criticalPerOneMillion">Critical Cases Per One Million</Button>
            <Button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} value="deathsPerOneMillion">Deaths Per One Million</Button>
            <Button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} value="recoveredPerOneMillion">Recovered Cases Per One Million</Button>
            <Button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} value="testsPerOneMillion">Tests Per One Million</Button>
<br/>

            <Button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} value="population">Population</Button>
            <Button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} value="todayCases">New Cases Today</Button>
            <Button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} value="todayDeaths">New Deaths Today</Button>
        </span>
    )
}

export default MapInput