import React from 'react'
import { Button } from 'react-bootstrap'
import DisplayMapData from '../d3/DisplayMapData'


const MapInput = () => {
    // add multiple buttons for type of data available
    // disable button that is clicked / re-enable when another button is clicked
    // remove data layer when a new button is clicked

    return (
        <span>
            <Button onClick={event => DisplayMapData(event.target.value)} value="population">Population</Button>
            {/* <Button onClick={event => DisplayMapData(event.target.value)} value="cases">Total Cases</Button>
            <Button onClick={event => DisplayMapData(event.target.value)} value="active">Active Cases</Button>
            <Button onClick={event => DisplayMapData(event.target.value)} value="critical">Critical Cases</Button>
            <Button onClick={event => DisplayMapData(event.target.value)} value="deaths">Total Deaths</Button>
            <Button onClick={event => DisplayMapData(event.target.value)} value="recovered">Recovered Cases</Button>

            <Button onClick={event => DisplayMapData(event.target.value)} value="tests">Number of Tests</Button>
            <Button onClick={event => DisplayMapData(event.target.value)} value="todayCases">New Cases Today</Button>
            <Button onClick={event => DisplayMapData(event.target.value)} value="todayDeaths">New Deaths Today</Button>

            <Button onClick={event => DisplayMapData(event.target.value)} value="casesPerOneMillion">Total Cases Per One Million</Button>
            <Button onClick={event => DisplayMapData(event.target.value)} value="activePerOneMillion">Active Cases Per One Million</Button>
            <Button onClick={event => DisplayMapData(event.target.value)} value="criticalPerOneMillion">Critical Cases Per One Million</Button>
            <Button onClick={event => DisplayMapData(event.target.value)} value="deathsPerOneMillion">Deaths Per One Million</Button>
            <Button onClick={event => DisplayMapData(event.target.value)} value="recoveredPerOneMillion">Recovered Cases Per One Million</Button>
            <Button onClick={event => DisplayMapData(event.target.value)} value="testsPerOneMillion">Tests Per One Million</Button> */}
        </span>
    )
}

export default MapInput