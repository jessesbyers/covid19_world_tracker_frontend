import {
    max, scaleBand, scaleLinear, axisBottom, axisLeft, select, zoom, event
} from 'd3'

import d3Tip from "d3-tip";
import { color } from './Color'


const DrawBar = (countryName, totalCases, dailyData, id, caseType) => {
    console.log(caseType)

    caseType ? caseType = caseType : caseType = "total"

    function jsUcfirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // setting up constants for sizes
    const width = 960
    const height = 500
    const padding = .2
    const margin = ({top: 80, right: 0, bottom: 80, left: 80})
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const vizName = "viz" + id


    // setting constants for text labels and title
    const xAxisLabel = "Number of Days"
    const yAxisLabel = caseType ? `Number of Cases: ${jsUcfirst(caseType)}` : "Number of Cases"
    const title = countryName
    const subtitle = () => {
        if (dailyData.length > 0) {
            return totalCases + " COVID-19 Cases Reported Since " + dailyData[0].date.toLocaleDateString()
        } else {
            return totalCases + " COVID-19 Cases Reported"
        }
    }


        
    


    const xScale = scaleBand()
        .domain(dailyData.map(d => d.dayCount))
        .range([margin.left, width - margin.right])
        .padding(padding)




    const yScale = scaleLinear()
        .domain([0, max(dailyData, d => d[`${caseType}`])])
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
                "<span style='color:#BD2D28'>" + d.total + " Total" + "<br/>" + "</span>" +
                "<span style='color:#E3BA22'>" + d.active + " Active" + "<br/>" + "</span>" +
                "<span style='color:#A0B700'>" + d.recovered + " Recovered" + "<br/>" + "</span>" +
                "<span style='color:#BA5F06'>" + d.deaths + " Deaths" + "</p>" 
        })




    



    // setting up svg element on card
    const svg = select(`.${vizName}`)
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMid meet")
        .attr("viewBox", [0, 0, width, height])

    const g = svg.append("g")
        .attr("fill", color(caseType))
        .selectAll('rect')
        .data(dailyData)
        .join("rect")
        .attr('x', d => xScale(d.dayCount))

        .attr("y", d => yScale(d[`${caseType}`]))
        .attr("width", xScale.bandwidth())
        .attr("height", d => yScale(0) - yScale(d[`${caseType}`]))
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
        .attr('x', -height / 2)
        .attr('fill', 'black')
        .attr('transform', `rotate(-90)`)
        .attr('text-anchor', 'middle')
        .text(yAxisLabel);



    const titleG = svg.append("g")

    titleG.append('text')
        .attr('class', 'title')
        .attr('x', width / 2)
        .attr('y', 40)
        .attr('text-anchor', 'middle')
        .text(title);

        titleG.append('text')
        .attr('class', 'subtitle')
        .attr('x', width / 2)
        .attr('y', 70)
        .attr('text-anchor', 'middle')
        .text(subtitle());

    svg.call(tip);

}

export default DrawBar