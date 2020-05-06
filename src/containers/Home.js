// import React from 'react';
import React, { useState, useEffect } from 'react';



const Home = () => {
    const [countries, setCountries] = useState([]);
 
    useEffect( () => {
      async function fetchData() {
        // const result = await fetch("https://api.covid19api.com/countries")
        fetch("https://api.covid19api.com/countries")
        .then(response => response.json())
        .then(data => {
        setCountries(data)
        })
      }
      fetchData();
    });


    return (
        <div>
            <ol>

            {countries.map(country => {
                console.log(country.Slug)
                return (
                    <li>{country.Country}</li>
                )
            })}
            </ol>

            

        </div>
    )

}

export default Home;