// File: src/components/Dashboard/charts/DoughnutChart.js
// Date modified: 2024-07-17
// Description: Doughnut Chart component using D3.js
//
// This component renders a doughnut chart using D3.js. It takes an array of data
// points and renders them as segments of a doughnut. The chart is responsive and
// will update when the data or dimensions change.
//
// Props:
//   - data: An array of objects, each with 'label' and 'value' properties
//   - width: The width of the SVG (default: 400)
//   - height: The height of the SVG (default: 400)
//   - innerRadius: The inner radius of the doughnut (default: 60)
//   - outerRadius: The outer radius of the doughnut (default: 150)

import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const DoughnutChart = ({
  data,
  width = 400,
  height = 400,
  innerRadius = 60,
  outerRadius = 150,
}) => {
  const svgRef = useRef();

  useEffect(() => {
    // Remove any existing SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    // Create SVG element
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    // Set up color scale
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Set up pie layout
    const pie = d3
      .pie()
      .value((d) => d.value)
      .sort(null);

    // Set up arc generator
    const arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);

    // Create and style the segments
    const arcs = svg
      .selectAll(".arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    arcs
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => color(i));

    // Add labels
    arcs
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("dy", ".35em")
      .style("text-anchor", "middle")
      .text((d) => d.data.label);

    // Add percentage labels
    const total = d3.sum(data, (d) => d.value);
    arcs
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("dy", "1.5em")
      .style("text-anchor", "middle")
      .text((d) => `${((d.data.value / total) * 100).toFixed(1)}%`);
  }, [data, width, height, innerRadius, outerRadius]);

  return <svg ref={svgRef}></svg>;
};

export default DoughnutChart;
