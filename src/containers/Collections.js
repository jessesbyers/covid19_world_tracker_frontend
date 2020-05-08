import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../constants/constants'
import Collection from '../components/Collection'


const Collections = (props) => {
    // const [collections, setCollections] = useState([]);
    console.log(props.location.collection)

    // useEffect( () => {
    //     // code for fetching collections data from backend
    //     async function fetchData() {
    //         await fetch(`${BASE_URL}` + `/collections`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setCollections(data)
    //         })
    //     }

    //     fetchData();
    // }, []); 


    return (
        // <div>
        //     {collections.map( (collection, index) => <Collection key={index} collection={collection} />)}
        // </div>

        <div>TEST</div>
    )
}

export default Collections
