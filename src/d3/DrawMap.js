import { select, json, geoPath, geoNaturalEarth1, tsv } from 'd3';
import { feature } from 'topojson';

const DrawMap = () => {
    console.log("drawing map")

    const height = 500
    const width = 960

    // setting up svg element on home page
    const svg = select(".mapviz").append("svg")
        .attr("preserveAspectRatio", "xMinYMid meet")
        .attr("viewBox", [0, 0, width, height])
        // .attr("width", width)
        // .attr("height", height)
        // .attr("id", "svg-viz")


    const projection = geoNaturalEarth1();
    const pathGenerator = geoPath().projection(projection);

    svg.append('path')
        .attr('class', 'sphere')
        .attr('d', pathGenerator({type: 'Sphere'}));


    Promise.all([
        tsv('https://unpkg.com/world-atlas@1.1.4/world/50m.tsv'),
        json('https://unpkg.com/world-atlas@1.1.4/world/110m.json')
    ]).then(([ tsvData, topoJSONdata ]) => {

        const countryName = {}
        tsvData.forEach(d => {
            countryName[d.iso_n3] = d.name
        })

        const countries = feature(topoJSONdata, topoJSONdata.objects.countries);
        svg.selectAll('path').data(countries.features)
        .enter().append('path')
            .attr('class', 'country')
            .attr('d', pathGenerator)
        .append("title")
            .text(d => countryName[d.id])
    })
}

export default DrawMap

