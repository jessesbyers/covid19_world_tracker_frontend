import { select, geoCentroid, geoPath, geoNaturalEarth1 } from 'd3'

const DisplayMapData = (caseType, data) => {
    // console.log("Display Map Data d3 file")
    // console.log(caseType)
    // console.log(data)

        // specifying map projection
        // const projection = geoNaturalEarth1();
    //     const pathGenerator = geoPath().projection(projection);

    // data.forEach(d => {
    //     const coordinates = projection([d.countryInfo.long, d.countryInfo.lat])
    //     // const lat = d.countryInfo.lat
    //     // const long = d.countryInfo.long
    //     // d = [lat, long]
    //     // console.log(geoCentroid(d))
    //     // [d.countryInfo.lat, d.countryInfo.long] = projection(geoCentroid(d));
    //     // return [d.countryInfo.lat, d.countryInfo.long]
    //     //  = geoCentroid(d)
    //     const svg = select(".mapviz svg")
    //     const g = svg.select("g")
    
    //     g.selectAll('circle').data(d)
    //     .enter().append('circle')
    //         .attr('class', 'country-circle')
    //         .attr("cx", console.log(geoCentroid(coordinates[1])))
    //         .attr("cy", console.log(geoCentroid(coordinates[0])))
    //         // .attr("transform", function(d) { return "translate(" + geoCentroid(coordinates) + ")"; })
    //         .attr("r", 5)
    //         .attr("fill", "red")

    // })



}

export default DisplayMapData