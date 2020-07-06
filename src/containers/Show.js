// need to add loader logic

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { Redirect } from "react-router"
import { Loader } from '../components/Loader'
import Province from '../components/Province'
import State from '../components/State'


import Viz from '../d3/Viz'
import { Card } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

import { selectAll } from 'd3'


const Show = (props) => {
    const provincesData = useSelector(state => state.provincesData)
    const [caseType, setCaseType] = useState("");
    const [provinces, setProvinces] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch()

    useEffect( () => {
        async function fetchData() {
            setIsLoading(true);

            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };

            const response = await fetch("https://api.covid19api.com/dayone/country/" + props.location.slug, requestOptions)
            const data = await response.json()
            dispatch({ type: 'addProvincesData', payload: data})

            const provinceArray = []
            data.forEach(d => {
                if (!provinceArray.includes(d.Province) && d.Province !== "") {
                    provinceArray.push(d.Province)
                } else if (!provinceArray.includes("") && d.Province === "")
                    provinceArray.push("")
            })
            
            setProvinces(provinceArray.sort((a,b) => a > b ? 1 : -1))
            setIsLoading(false);
        }
        fetchData();
    }, []); 
    // warning about a useEffect cleanup function - need to look into this - memory leak

            // Logic if country is United States (because state data is broken down into cities)
            if (provinces.includes("Alabama")) {
                return (
                    <div>
                        <Row >
                            <Col xs="12" sm="6" md="4" lg="3" xl="3">
                                <Card>
                                    <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="cases block" value="total">Total Cases</button>
                                    <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="deathsPerOneMillion block" value="deaths">Deaths</button>
                                    <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="activee block" value="active"> Active Cases</button>
                                    <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="recovered block" value="recovered">Recovered Cases</button>
                                </Card>
                            </Col>

                            {provinces.map((state, index) => { 
                                    return (
                                        <Col xs={12} sm={6} md={4} lg={3} key={index}>
                                            <Card>
                                                <State caseType={caseType} state={state} stateData={provincesData.filter(day => day.Province === state)} countryName={provincesData[0].Country}/>
                                            </Card>
                                        </Col>
                                    )
                                })
                            } 
                        </Row>
                    </div>
                )

            // Logic for countries that are not broken down into provinces (such as Mexico)
            } else if (provinces.length === 1) {
                return (
                    <div>
                        <Row >
                            <Col xs="12" sm="6" md="4" lg="3" xl="3">
                                <Card>
                                    <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="cases block" value="total">Total Cases</button>
                                    <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="deathsPerOneMillion block" value="deaths">Deaths</button>
                                    <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="activee block" value="active"> Active Cases</button>
                                    <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="recovered block" value="recovered">Recovered Cases</button>
                                </Card>
                            </Col>

                            <Col sm="12" md="9" lg="9" xl="9">
                                <Card>
                                    <Province caseType={caseType} province={provincesData[0].Country} provinceData={provincesData}/> 
                                </Card>
                            </Col>
                        </Row>
                    </div>
                )

            // Logic for all other countries that have data broken down by province (such as Canada, or United Kingdom)
            } else {
                return (
                    <div>
                        <Row >
                            <Col xs="12" sm="6" md="4" lg="3" xl="3">
                                <Card>
                                    <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="cases block" value="total">Total Cases</button>
                                    <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="deathsPerOneMillion block" value="deaths">Deaths</button>
                                    <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="activee block" value="active"> Active Cases</button>
                                    <button onClick={event => (setCaseType(event.target.value), selectAll("svg").remove())} className="recovered block" value="recovered">Recovered Cases</button>
                                </Card>
                            </Col>

                            {provinces.map((province, index) => { 
                                console.log(province + " " + index)
                                    return (
                                        <Col xs={12} sm={6} md={4} lg={3} key={index}>
                                            <Card>
                                                <Province caseType={caseType} province={province} provinceData={provincesData.filter(day => day.Province === province)}/> 
                                            </Card>
                                        </Col>
                                    )
                                })
                            } 
                        </Row>
                    </div>
                )
            }
}

export default Show
// ****************************

 
    //     // return <Redirect to='/' />
    //     return <Redirect to={process.env.PUBLIC_URL} />
    //     // return <h3>Use the Buttons Above to Get Started</h3>
    // }

// LOADER LOGIC
    // return (
    //     <div>
    //         {isLoading ? (
    //             < Loader />
    //         ) : (
    //             provinces.map(province => <Province province={province} caseType={caseType} />)
    //         )}
    //     </div>
    // )