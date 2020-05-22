export const sizeLegend = (selection, props) => {
    const {
      sizeScale,
      spacing,
      textOffset,
      numTicks,
      tickFormat
    } = props;
    
    const ticks = sizeScale.ticks(numTicks)
      .filter(d => d !== 0)
      .reverse();
  
    const groups = selection.selectAll('g').data(ticks);
    const groupsEnter = groups
      .enter().append('g')
        .attr('class', 'tick-map');
    groupsEnter
      .merge(groups)
        .attr('transform', (d, i) =>
          `translate(0, ${i * spacing})`
        );
    groups.exit().remove();
    
    groupsEnter.append('circle')
      .merge(groups.select('circle'))
        .attr('r', sizeScale);
    
    groupsEnter.append('text')
      .merge(groups.select('text'))
        .text(tickFormat)
        .attr('dy', '0.32em')
        .attr('x', d => sizeScale(d) + textOffset);
  }