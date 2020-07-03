// does not need redux (yet)

import React, { useState, useEffect } from 'react';
import CountryDropdown from '../components/CountryDropdown'
import { Loader } from '../components/Loader'

import { useDispatch, useSelector } from "react-redux";
// import { addCountries } from '../actions/addCountries'



const New = () => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const countryList = useSelector(state => state.countries)
    const dispatch = useDispatch()

 
    useEffect( () => {
        async function fetchData() {
            setIsLoading(true);

            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };

            const response = await fetch("https://api.covid19api.com/countries", requestOptions)
            const data = await response.json()
            dispatch({ type: 'addCountries', payload: data })

            setCountries(data)
            setIsLoading(false);
        }
        fetchData();
    }, []); 


    // const options = countryList.sort((a, b) => (a.Country > b.Country) ? 1 : -1).map( country => {
    //     return (
    //         {name: country.Country, value: country.Slug, flagCode: country.ISO2}
    //     )
    // })

    // dispatch({ type: 'addCountries', payload: options })


    return (

        <div>
            {/* loading */}

            {isLoading ? (
                < Loader />
            ) : (
                <CountryDropdown options={countryList} />
            )}
        </div>
    )
}

export default New