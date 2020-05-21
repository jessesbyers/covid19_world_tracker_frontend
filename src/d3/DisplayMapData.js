import { select, geoNaturalEarth1, scaleSqrt, max} from 'd3'

const DisplayMapData = (caseType, data) => {
    console.log(data)
    console.log(caseType)
    // console.log(data[0][`${caseType}`])

    const color = (caseType) => {
        switch (caseType) {
            case "population":
                return ""
            case "cases":
                return ""
            case "active":
                return ""
            case "critical":
                return ""
            case "deaths":
                return ""
            case "recovered":
                return ""
            case "tests":
                return ""
            case "todayCases":
                return ""
            case "todayDeaths":
                return ""
            case "casesPerOneMillion":
                return ""
            case "activePerOneMillion":
                return ""
            case "criticalPerOneMillion":
                return ""
            case "deathsPerOneMillion":
                return ""
            case "recoveredPerOneMillion":
                return ""
            case "testsPerOneMillion":
                return ""
            
        }


    }

    const projection = geoNaturalEarth1();
    const radiusValue = d => d[`${caseType}`];

    const radiusScale = scaleSqrt()
        .domain([0, max(data, d => d[`${caseType}`], radiusValue)])
        .range([0, 20]);


console.log(radiusScale.domain())
    const g = select(".map-group")

    g.selectAll('circle').data(data)
    .enter().append('circle')
        .attr('class', 'country-circle')
        // setting x and y coordiantes by translating country coordinate data to pixels
        .attr("transform", function(d) { return "translate(" + projection([d.countryInfo.long, d.countryInfo.lat]) + ")"; })
        .attr("r", d => radiusScale(radiusValue(d)))
        .attr("fill", color(caseType))
    .append("title")
        .text(d => d.country + ": " + d[`${caseType}`])
}

export default DisplayMapData