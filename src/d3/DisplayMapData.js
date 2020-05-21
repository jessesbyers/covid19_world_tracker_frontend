import { select, geoCentroid, geoPath, geoNaturalEarth1 } from 'd3'

const DisplayMapData = (caseType, data) => {
    // console.log("Display Map Data d3 file")
    // console.log(caseType)
    // console.log(data)

    const projection = geoNaturalEarth1();
    const pathGenerator = geoPath().projection(projection);

    const g = select(".map-group")

            g.selectAll('circle').data(data)
            .enter().append('circle')
                .attr('class', 'country-circle')
                // setting x and y coordiantes by translating country coordinate data to pixels
                .attr("transform", function(d) { console.log(d); return "translate(" + projection([d.countryInfo.long, d.countryInfo.lat]) + ")"; })
                .attr("r", 5)
                .attr("fill", "red")
            .append("title")
                .text(d => d.country)
}

export default DisplayMapData