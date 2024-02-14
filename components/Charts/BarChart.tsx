import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

// Define the shape of data objects
interface DataItem {
  name: string;
  value: number;
}

// Define props for the BarChart component
interface BarChartProps {
  data: DataItem[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return; // Exit if ref is not assigned

    const width = 400;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    const svg = d3.select(svgRef.current)
                  .attr("width", width)
                  .attr("height", height);

    svg.selectAll("*").remove(); // Clear SVG to prevent duplication

    const xScale = d3.scaleBand()
                     .domain(data.map(d => d.name))
                     .rangeRound([margin.left, width - margin.right])
                     .padding(0.1);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(data, d => d.value) ?? 0])
                     .range([height - margin.bottom, margin.top]);

    svg.append("g")
       .attr("fill", "steelblue")
       .selectAll("rect")
       .data(data)
       .join("rect")
         .attr("x", d => xScale(d.name)!)
         .attr("y", d => yScale(d.value))
         .attr("height", d => yScale(0) - yScale(d.value))
         .attr("width", xScale.bandwidth());

    svg.append("g")
       .attr("transform", `translate(0,${height - margin.bottom})`)
       .call(d3.axisBottom(xScale));

    svg.append("g")
       .attr("transform", `translate(${margin.left},0)`)
       .call(d3.axisLeft(yScale));
  }, [data]);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default BarChart;
