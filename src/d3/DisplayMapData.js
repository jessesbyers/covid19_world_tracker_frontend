import { select, geoNaturalEarth1, scaleSqrt, max, format, selectAll} from 'd3'
import { sizeLegend } from './SizeLegend'
import { color } from './Color'

const DisplayMapData = (caseType, caseTitle, data) => {

    // resetting to blank map
    selectAll("circle").remove()
    select("g.map-legend").remove()
    select("text.legend-title").remove()

    // add data to build new visualization
    if (caseType !== "reset") {    

        const g = select(".map-group")

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
            .attr('class', 'map-legend')
            .call(sizeLegend, {
                sizeScale,
                spacing: 45,
                textOffset: 10,
                numTicks: 5,
                tickFormat: numberFormat 
            })

        // adding map title on side of legend
        const title = g.append('text')
            .attr('class', 'legend-title')
            .text(caseTitle)
            .attr('transform', 'rotate(270)')
            .attr('x', -245)
            .attr('y', 45);

        // color-coding all circles based on caseType from user input
        g.selectAll("circle")
            .attr("fill", color(caseType));
    }
}

export default DisplayMapData