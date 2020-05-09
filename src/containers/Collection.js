import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../constants/constants'
import Country from '../components/Country'


const Collection = (props) => {
    // const [countryData, setCountryData] = useState([]);
    // console.log(props.countries.length)
    // let newCountry = props.countries[props.countries.length -1]

    // let newCountryUrl = `https://api.covid19api.com/total/dayone/country/` + `${newCountry}`
    // console.log(`https://api.covid19api.com/total/dayone/country/${newCountry}`)
    // console.log(newCountry)
    // console.log(newCountryUrl)


    // useEffect( () => {

    //     // code for fetching country data from COVID19 API
    //     if (props.countries.length > 0) {

    //         async function fetchData() {
    //             console.log(newCountry)
    //             console.log(props.countries)
    //             var requestOptions = {
    //                 method: 'GET',
    //                 redirect: 'follow'
    //               };
    //             // await fetch(`https://api.covid19api.com/total/dayone/country/bolivia`)
    //             await fetch(`https://api.covid19api.com/total/dayone/country/` + `${newCountry}`, requestOptions)


    //             // await fetch(`https://api.covid19api.com/total/dayone/country/${newCountry}`)
    //             .then(response => response.json())
    //             .then(data => {
    //                 console.log(data)
    //                 setCountryData(countryData => [...countryData, data])
    //             })
    //             .catch(error => console.log('error', error));

    //         }

    //         fetchData();
    //     }
    // }, []); 


    return (
        // <div>
        //     {collections.map( (collection, index) => <Collection key={index} collection={collection} />)}
        // </div>

        <div>TEST
                    {/* {console.log(countryData)}; */}

        </div>
    )
}

export default Collection
