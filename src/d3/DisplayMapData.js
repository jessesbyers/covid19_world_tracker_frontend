import { select, geoNaturalEarth1, scaleSqrt, max, format} from 'd3'
import { sizeLegend } from './SizeLegend'

const DisplayMapData = (caseType, caseTitle, data) => {
    console.log("displaying map data")

    const g = select(".map-group")

    const color = (caseType) => {
        switch (caseType) {
            case "cases":
                return "#137B80"
            case "active":
                return "#E3BA22"
            case "critical":
                return "#9A3E25"
            case "deaths":
                return "#E6842A"
            case "recovered":
                return "#5C8100"
            case "tests":
                return "#8E6C8A"

            case "casesPerOneMillion":
                return "#42A5B3"
            case "activePerOneMillion":
                return "#F2DA57"
            case "criticalPerOneMillion":
                return "#B37055"
            case "deathsPerOneMillion":
                return "#F6B656"
            case "recoveredPerOneMillion":
                return "#A0B700"
            case "testsPerOneMillion":
                return "#B396AD"

            case "population":
                return "#7C715E"
            case "todayCases":
                return "#005D6E"
            case "todayDeaths":
                return "#BA5F06"            
        }
    }

    const projection = geoNaturalEarth1();
    const radiusValue = d => d[`${caseType}`];

    const sizeScale = scaleSqrt()
        .domain([0, max(data, d => d[`${caseType}`], radiusValue)])
        .range([0, 20]);


    g.selectAll('circle').data(data)
    .enter().append('circle')
        .attr('class', 'country-circle')
        // setting x and y coordiantes by translating country coordinate data to pixels
        .attr("transform", function(d) { return "translate(" + projection([d.countryInfo.long, d.countryInfo.lat]) + ")"; })
        .attr("r", d => sizeScale(radiusValue(d)))
        .attr("fill", color(caseType))
    .append("title")
        .text(d => d.country + " " + caseTitle + ": "
        + format(',')(d[`${caseType}`]))



    // adding size legend
    const numberFormat = format(',');

    const legend = g.append('g')
        .attr('transform', `translate(65, 125)`)
        .call(sizeLegend, {
            sizeScale,
            spacing: 45,
            textOffset: 10,
            numTicks: 5,
            tickFormat: numberFormat 
        })
    const title = g.append('text')
        .attr('class', 'legend-title')
        .text(caseTitle)
        .attr('transform', 'rotate(270)')
        .attr('x', -245)
        .attr('y', 45);

    g.selectAll("circle")
        .attr("fill", color(caseType));
}

export default DisplayMapData