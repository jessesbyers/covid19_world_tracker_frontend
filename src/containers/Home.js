// import React from 'react';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import { postCountries } from '../actions/postCountries'


const Home = (props) => {
    const [countries, setCountries] = useState();
 
    useEffect( () => {
        let ignore = false;

        async function fetchData() {
            await fetch("https://api.covid19api.com/countries")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (!ignore) {
                    setCountries(data)
                }
            })
        }

        fetchData();
        return () => { ignore = true; }
        }, []); 

    if (countries) {
        return (
            <div>
                {console.log(countries)}
                <ol>
                    {countries.sort((a, b) => (a.Country > b.Country) ? 1 : -1).map( (country, index) => {
                        return (
                            <li key={index}>{country.Country}</li>
                        )
                    })}
                </ol>
            </div>
    )
    } else {
        return <div>Loading...</div>
    }
}

// export default connect(state => ({ countries: state.countries }), { postCountries })(Home);
// export default connect(null, { postCountries })(Home);
export default Home