import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../constants/constants'
import Collection from '../components/Collection'


const Collections = (props) => {
    const [collections, setCollections] = useState([]);

    useEffect( () => {
        // code for fetching collections data from backend
        async function fetchData() {
            await fetch(`${BASE_URL}` + `/collections`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setCollections(data)
            })
        }

        fetchData();
    }, []); 


    return (
        <div>
            <h1>COLLECTIONS component placeholder</h1>
            <p>maps through the collections and renders a collection object for each one 
                with a button navlink to view the collection</p>
                    {collections.map( (collection, index) => {
                        return (
                            <Collection key={index} collection={collection} />
                        )
                    })}
        </div>
    )
}

export default Collections
