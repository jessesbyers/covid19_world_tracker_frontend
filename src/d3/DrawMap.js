import { select, json, geoPath, geoNaturalEarth1 } from 'd3';
import { feature } from 'topojson';

const DrawMap = () => {
    console.log("drawing map")

    const height = 500
    const width = 960

    // setting up svg element on home page
    const svg = select(".mapviz").append("svg")
        // .attr("viewBox", [0, 0, width, height])
        .attr("width", width)
        .attr("height", height)
        // .attr("id", "svg-viz")


    const projection = geoNaturalEarth1();
    const pathGenerator = geoPath().projection(projection);

    svg.append('path')
        .attr('class', 'sphere')
        .attr('d', pathGenerator({type: 'Sphere'}));

    json('https://unpkg.com/world-atlas@1.1.4/world/110m.json')
    .then(data => {
        const countries = feature(data, data.objects.countries);
        console.log(countries)

        svg.selectAll('path').data(countries.features)
        .enter().append('path')
            .attr('class', 'country')
            .attr('d', pathGenerator);
    });
}

export default DrawMap

