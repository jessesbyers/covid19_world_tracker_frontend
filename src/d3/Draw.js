import {
    max, scaleBand, scaleLinear, axisBottom, axisLeft, select, tickSize, selectAll, timeDay
} from 'd3'

import d3Tip from "d3-tip";


// TO DOS:
    // make svg size responsive
    // account for countries with 0 cases (text box in middle of graph?)
    // add stacked bar

const Draw = (countryName, totalCases, dailyData) => {
    console.log(dailyData)

    // setting up constants for sizes
    const width = 700
    const height = 700
    const padding = .2
    const margin = ({top: 80, right: 0, bottom: 80, left: 80})
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const color = "steelblue"


    // setting constants for text labels and title
    const xAxisLabel = "Number of Days"
    const yAxisLabel = "Number of Confirmed Cases"
    const title = countryName + " Covid-19 Cases"

    const xScale = scaleBand()
        .domain(dailyData.map(d => d.dayCount))
        .range([margin.left, width - margin.right])
        .padding(padding)




    const yScale = scaleLinear()
        .domain([0, max(dailyData, d => d.total)])
        .range([height - margin.bottom, margin.top])




    const xAxis = (g) => {
        g.attr("transform", `translate(0,${height - margin.bottom})`)
        .call(axisBottom(xScale)
        .tickValues(xScale.domain().filter(function(d,i){ return !(((i+1)%5))})))


        .call(g => g.append("text")
            .attr("x", -margin.left)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text(dailyData.dayCount))

    }

    
    const yAxis = (g) => {
        g.attr("transform", `translate(${margin.left},0)`)
        .call(axisLeft(yScale).ticks(null, dailyData.format).tickSize(-innerWidth))
            
            .call(g => g.select(".domain").remove())

        .call(g => g.append("text")
            .attr("x", -margin.left)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text(dailyData.total))
    }



    // setting up tooltip with data labels
    const tip = d3Tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function(d) {
            return "<p>" + "<span style='color:white'>" + "Day " + d.dayCount + "<br/>" +
                d.date.toLocaleDateString() + "<br/>" + "</span>" +
                "<span style='color:steelblue'>" + d.total + " Total" + "<br/>" + "</span>" +
                "<span style='color:green'>" + d.active + " Active" + "<br/>" + "</span>" +
                "<span style='color:orange'>" + d.recovered + " Recovered" + "<br/>" + "</span>" +
                "<span style='color:red'>" + d.deaths + " Deaths" + "</p>" 
        })




    



    // setting up svg element
    const svg = select(".viz")
        .append("svg")
        .attr("viewBox", [0, 0, width, height])
        .attr("id", "svg-viz")

    const g = svg.append("g")
        .attr("fill", color)
        .selectAll('rect')
        .data(dailyData)
        .join("rect")
        .attr('x', d => xScale(d.dayCount))

        .attr("y", d => yScale(d.total))
        .attr("width", xScale.bandwidth())
        .attr("height", d => yScale(0) - yScale(d.total))
        .attr("class", "bar")
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)




    const xAxisG = svg.append('g')
        .call(xAxis)
        
    xAxisG.select('.domain').remove();
    
    xAxisG.append('text')
        .attr('class', 'axis-label')
        .attr('y', 45)
        .attr('x', innerWidth / 2)
        .attr('fill', 'black')
        .text(xAxisLabel)







    const yAxisG = svg.append('g')
        .call(yAxis)
        
    yAxisG.select('.domain').remove();
    
    yAxisG.append('text')
        .attr('class', 'axis-label')
        .attr('y', -60)
        .attr('x', -innerHeight / 2)
        .attr('fill', 'black')
        .attr('transform', `rotate(-90)`)
        .attr('text-anchor', 'middle')
        .text(yAxisLabel);



    const titleG = svg.append("g")

    titleG.append('text')
        .attr('class', 'title')
        .attr('x', innerWidth / 2)
        .attr('y', 40)
        .attr('text-anchor', 'middle')
        .text(title);

    svg.call(tip);
}

export default Draw
