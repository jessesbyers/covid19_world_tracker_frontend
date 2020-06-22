import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router"
import { Loader } from '../components/Loader'
import Country from '../components/Country'


import Viz from '../d3/Viz'
import { Card } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

import { selectAll } from 'd3'


const Show = (props) => {
    const [caseType, setCaseType] = useState("");
    const [provinceData, setProvinceData] = useState([]);
    const [provinces, setProvinces] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    useEffect( () => {
        async function fetchData() {
            setIsLoading(true);

            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };

            const response = await fetch("https://api.covid19api.com/dayone/country/" + props.location.slug, requestOptions)
            const data = await response.json()
            console.log(data)
            const province_array = []

            data.forEach(d => {
                if (!province_array.includes(d.Province)) {
                    province_array.push(d.Province)
                }
            })

            setProvinceData(data)
            setProvinces(province_array)
            setIsLoading(false);
        }
        fetchData();
    }, []); 


    if (props.location.countryName) {
        return (
            <div>
                <Row>
                    <Col xs="12" sm="6" md="4" lg="3" xl="3">
                        <Card>
                            <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="cases block" value="total">Total Cases</button>
                            <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="deathsPerOneMillion block" value="deaths">Deaths</button>
                            <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="activee block" value="active"> Active Cases</button>
                            <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="recovered block" value="recovered">Recovered Cases</button>


                            <NavLink
                                to = {{
                                    pathname: `/collection`,
                                    countryData: props.location.collection
                                }}>
                                <button className="reset block">Return to Collection</button>
                            </NavLink>
                        </Card> 
                    </Col>


                    {/* {let pData = provinces.forEach((province) => provinceData.filter((data) => data.Province === province)
                    )} */}
                        return (
                            <Col xs={12} sm={6} md={4} lg={3} key={index}>

                                <Card className="show">
                                    <Country key={index} id={index} country={pData} caseType={caseType} collection={props.location.collection}/>
                                </Card>
                            </Col>
                        )
                    {/* })} */}
                </Row>
            </div>
        )

    } else {
        // return <Redirect to='/' />
        return <Redirect to={process.env.PUBLIC_URL} />
        // return <h3>Use the Buttons Above to Get Started</h3>
    }
}

export default Show










// ______________ DO NOT DELETE!!! WORKING CODE!!!_________________
// import React, { useState } from 'react';
// import { Redirect } from "react-router"

// import Viz from '../d3/Viz'
// import { Card } from 'react-bootstrap'
// import { Col } from 'react-bootstrap'
// import { Row } from 'react-bootstrap'
// import { NavLink } from 'react-router-dom';

// import { selectAll } from 'd3'


// const Show = (props) => {
//     const [caseType, setCaseType] = useState("");
//     console.log(props.location)


//     if (props.location.countryName) {
//         return (
//             <div>
//                 <Row className="justify-content-md-center">
//                 <Col sm="12" md="3" lg="3" xl="3">
//                         <Card>
//                             <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="cases block" value="total">Total Cases</button>
//                             <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="deathsPerOneMillion block" value="deaths">Deaths</button>
//                             <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="activee block" value="active"> Active Cases</button>
//                             <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="recovered block" value="recovered">Recovered Cases</button>


//                             <NavLink
//                                 to = {{
//                                     pathname: `/collection`,
//                                     countryData: props.location.collection
//                                 }}>
//                                 <button className="reset block">Return to Collection</button>
//                             </NavLink>
//                         </Card> 
//                     </Col>

//                     <Col sm="12" md="9" lg="9" xl="9" >
//                         <Card className="show">
//                             <Viz countryName={props.location.countryName} totalCases={props.location.totalCases} dailyData={props.location.dailyData} id={props.location.slug} slug={props.location.slug} caseType={caseType}/>
//                         </Card>
//                     </Col>
//                 </Row>
//             </div>
//         )

//     } else {
//         // return <Redirect to='/' />
//         return <Redirect to={process.env.PUBLIC_URL} />
//         // return <h3>Use the Buttons Above to Get Started</h3>
//     }
// }

// export default Show