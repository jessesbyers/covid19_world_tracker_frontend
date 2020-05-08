import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../constants/constants'



const Show = (props) => {
    console.log(props)
    console.log(`${BASE_URL}` + `/collections/${props.match.params.id}/countries`)
    const [data, setData] = useState([])

    useEffect( () => {
        // DO NOT DELETE: Code for fetching countries directly from database
            // async function fetchData() {
            //     await fetch("https://api.covid19api.com/countries")
            //     .then(response => response.json())
            //     .then(data => {
            //         console.log(data)
            //         setCountries(data)
            //     })
            // }
    
    // code for fetching seed data from backend for testing
            async function fetchData() {
                await fetch(`${BASE_URL}` + `/collections/${props.match.params.id}`)
                .then(response => response.json())
                .then(results => {
                    console.log(results)
                    setData(results)
                })
            }
    
            fetchData();
        }, []); 

    return (
        <div>
            <h1>SHOW component placeholder</h1>
            <p>renders 4 D3 chart objects, each showing data for a single country in the collection</p>
            <ul>
                <li>id: {props.location.collection.id}</li>
                <li>name: {props.location.collection.name}</li>
                <li>summary: {props.location.collection.summary}</li>
            </ul>
        </div>
    )
}

export default Show