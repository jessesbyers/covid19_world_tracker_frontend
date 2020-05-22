import { select, json, geoPath, geoNaturalEarth1, tsv, zoom, event } from 'd3';
import { feature } from 'topojson';

const DrawMap = (caseType, data) => {
    console.log("drawing map")

    // setting up svg element on Home component; making size responsive
    const height = 500
    const width = 960

    const svg = select(".mapviz").append("svg")
        .attr("preserveAspectRatio", "xMinYMid meet")
        .attr("viewBox", [0, 0, width, height])

    // specifying map projection
    const projection = geoNaturalEarth1();
    const pathGenerator = geoPath().projection(projection);

    // creating a group to arrange map elements
    const g = svg.append("g")
        .attr("class", "map-group")
    g.append('path')
        .attr('class', 'sphere')
        .attr('d', pathGenerator({type: 'Sphere'}));

    // enabling zooming/panning on entire svg
    svg.call(zoom().on("zoom", () => {
        g.attr("transform", event.transform)
    }))

    // fetching and loading geographic data
        // tsvData supplies country names
        // topoJSONdata supplies geographic coordinates for each country
    Promise.all([
        tsv('https://unpkg.com/world-atlas@1.1.4/world/50m.tsv'),
        json('https://unpkg.com/world-atlas@1.1.4/world/50m.json')
    ])
    .then(([ tsvData, topoJSONdata ]) => {

        // parses tsvData to extract country names
        const countryName = {}
        tsvData.forEach(d => {
            countryName[d.iso_n3] = d.name
        })

        // draws a path for each country with countryName as title (shown on hover)
        const countries = feature(topoJSONdata, topoJSONdata.objects.countries);
        g.selectAll('path').data(countries.features)
        .enter().append('path')
            .attr('class', 'country')
            .attr('d', pathGenerator)
        .append("title")
            .text(d => countryName[d.id])
    })
}

export default DrawMap