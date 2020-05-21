import React from 'react'
import { Button } from 'react-bootstrap'
import DisplayMapData from '../d3/DisplayMapData'


const MapInput = () => {
    // add multiple buttons for type of data available

    return <Button onClick={event => DisplayMapData(event.target.innerText)}>Display Data</Button>
}

export default MapInput