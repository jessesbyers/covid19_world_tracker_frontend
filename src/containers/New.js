import React, { useState, useEffect } from 'react';
import CountryDropdown from '../components/CountryDropdown'
import { Loader } from '../components/Loader'


const New = () => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

 
    useEffect( () => {
        async function fetchData() {
            setIsLoading(true);

            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };

            const response = await fetch("https://api.covid19api.com/countries", requestOptions)
            const data = await response.json()
            setCountries(data)
            setIsLoading(false);

        }
        fetchData();
    }, []); 

    const options = countries.sort((a, b) => (a.Country > b.Country) ? 1 : -1).map( country => {
        return (
            {name: country.Country, value: country.Slug, flagCode: country.ISO2}
        )
    })

    return (
        <div>
            {/* loading */}
            {isLoading ? (
                < Loader />
            ) : (
            
                <CountryDropdown options={options} />
            )}
        </div>
    )
}

export default New