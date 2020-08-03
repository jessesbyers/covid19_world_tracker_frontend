import React, { useState, useEffect } from 'react';
import CountryDropdown from '../components/CountryDropdown'
import { Loader } from '../components/Loader'
import { useDispatch } from "react-redux";

const New = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch()
    // const url = "https://api.covid19api.com/dayone/country/united-states"
    const url = "https://api.covid19api.com/dayone/country/china"

 
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
            setIsLoading(false);
        }
        fetchData();
    }, []); 

                useEffect( () => {
                    console.log("inside fetch for US data")
                    async function fetchData() {
                        setIsLoading(true);

                        var requestOptions = {
                            method: 'GET',
                            redirect: 'follow'
                        };
                        
                        const response = await fetch(url, requestOptions)
                        const data = await response.json()
                        console.log(data)
                        dispatch({ type: 'cacheData', payload: {slug: "united-states", data} })
                        setIsLoading(false);
                    }
                    fetchData();
                }, []); 

    return (

        <div>
            {isLoading ? (
                < Loader />
            ) : (
                < CountryDropdown />
            )}
        </div>
    )
}

export default New