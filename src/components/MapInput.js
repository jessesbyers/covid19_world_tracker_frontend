import React, { useState, useEffect } from 'react';
import DisplayMapData from '../d3/DisplayMapData'

const MapInput = () => {

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


    return (
        // <ButtonGroup vertical >
        <span>
            <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className="cases block" value="cases">Total Cases</button>
            <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className="casesPerOneMillion block" value="casesPerOneMillion">Total Cases Per Million</button>
            <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className="todayCases block" value="todayCases">New Cases Today</button>

            <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className="deaths block" value="deaths">Total Deaths</button>
            <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className="deathsPerOneMillion block" value="deathsPerOneMillion">Deaths Per Million</button>
            <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className="todayDeaths block" value="todayDeaths">New Deaths Today</button>

            <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className="activee block" value="active">Active Cases</button>
            <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className="activePerOneMillion block" value="activePerOneMillion">Active Cases Per Million</button>

            <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className="recovered block" value="recovered">Recovered Cases</button>
            <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className="recoveredPerOneMillion block" value="recoveredPerOneMillion">Recovered Cases Per Million</button>

            <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className="critical block" value="critical">Critical Cases</button>
            <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className="criticalPerOneMillion block" value="criticalPerOneMillion">Critical Cases Per Million</button>

            <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className="tests block" value="tests">Number of Tests</button>
            <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className="testsPerOneMillion block" value="testsPerOneMillion">Tests Per Million</button>

            <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className="population block" value="population">Population</button>
            <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className="reset block" value="reset">Reset Map</button>
        </span>
    )
}

export default MapInput