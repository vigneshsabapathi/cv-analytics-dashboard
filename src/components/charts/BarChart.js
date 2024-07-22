// File: src/components/Dashboard/charts/BarChart.js
// Date modified: 2024-07-17
// Description: Bar Chart component using D3.js
//
// This component renders a bar chart using D3.js. It takes an array of data
// points and renders them as vertical bars. The chart is responsive and will
// update when the data or dimensions change.
//
// Props:
//   - data: An array of objects, each with 'label' and 'value' properties
//   - width: The width of the SVG (default: 600)
//   - height: The height of the SVG (default: 400)
//   - margin: An object specifying the chart margins (default: {top: 20, right: 30, bottom: 40, left: 40})

import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const BarChart = ({
  data,
  width = 600,
  height = 400,
  margin = { top: 20, right: 30, bottom: 40, left: 40 },
}) => {
  const svgRef = useRef();

  useEffect(() => {
    // Remove any existing SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    // Set up dimensions
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    // Create SVG element
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Set up scales
    const x = d3.scaleBand().range([0, chartWidth]).padding(0.1);

    const y = d3.scaleLinear().range([chartHeight, 0]);

    // Set domains
    x.domain(data.map((d) => d.label));
    y.domain([0, d3.max(data, (d) => d.value)]);

    // Add X axis
    svg
      .append("g")
      .attr("transform", `translate(0,${chartHeight})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Add Y axis
    svg.append("g").call(d3.axisLeft(y));

    // Create and style the bars
    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.label))
      .attr("width", x.bandwidth())
      .attr("y", (d) => y(d.value))
      .attr("height", (d) => chartHeight - y(d.value))
      .attr("fill", "steelblue");
  }, [data, width, height, margin]);

  return <svg ref={svgRef}></svg>;
};

export default BarChart;
