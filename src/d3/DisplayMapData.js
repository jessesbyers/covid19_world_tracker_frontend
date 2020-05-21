import { select, geocentroid } from 'd3'

const DisplayMapData = (caseType, data) => {
    console.log("Display Map Data d3 file")
    console.log(caseType)
    console.log(data)

    const svg = select(".mapviz svg")
    console.log(svg)

}

export default DisplayMapData