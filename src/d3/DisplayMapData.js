import { select, geoNaturalEarth1, scaleSqrt, max} from 'd3'

const DisplayMapData = (caseType, data) => {
    console.log(data)
    console.log(caseType)
    // console.log(data[0][`${caseType}`])

    const projection = geoNaturalEarth1();
    const radiusValue = d => d.population;

    const radiusScale = scaleSqrt()
        .domain([0, max(data, d => d[`${caseType}`], radiusValue)])
        .range([0, 33]);


console.log(radiusScale.domain())
    const g = select(".map-group")

    g.selectAll('circle').data(data)
    .enter().append('circle')
        .attr('class', 'country-circle')
        // setting x and y coordiantes by translating country coordinate data to pixels
        .attr("transform", function(d) { return "translate(" + projection([d.countryInfo.long, d.countryInfo.lat]) + ")"; })
        .attr("r", 5)
        .attr("fill", "red")
    .append("title")
        .text(d => d.country)
}

export default DisplayMapData