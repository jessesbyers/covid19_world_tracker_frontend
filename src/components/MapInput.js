import React, { useState, useEffect } from 'react';
import DisplayMapData from '../d3/DisplayMapData'
import { Loader } from '../components/Loader'

const MapInput = () => {

    const [countryResults, setCountryResults] = useState([])
    const [isLoading, setIsLoading] = useState(false);


    useEffect( () => {
        async function fetchData() {
            setIsLoading(true);
            const response = await fetch('https://corona.lmao.ninja/v2/countries')
            const data = await response.json()
            setCountryResults(data)
            setIsLoading(false);
        }
        fetchData();
    }, [])   
    
    // logic for collapsing map choices
    let coll = document.getElementsByClassName("collapsible1");
    let collButton = document.querySelector("button.collapsible1")
    let i

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");

            if (collButton.innerText === "Open Map Menu") {
                collButton.innerText = "Close Map Menu"
            } else {
                collButton.innerText = "Open Map Menu"
            }
            
            var content = this.nextElementSibling;
            if (content.style.display === "none") {
              content.style.display = "block";
            } else {
              content.style.display = "none";
            }
        });
    }


    return (
        <div>
            {/* loading */}
            {isLoading ? (
                < Loader />
            ) : (

            // )}

            <span>

                <button className="collapsible1">Close Map Menu</button>

                <div className="content1">
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
                </div>

            </span>

            )}
        </div>
    )
}

export default MapInput