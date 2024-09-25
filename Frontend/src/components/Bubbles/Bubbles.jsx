import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';

const Bubbles = () => {
    const [cryptoData, setCryptoData] = useState([]);

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1')
            .then(response => response.json())
            .then(data => setCryptoData(data));
    }, []);

    useEffect(() => {
        if (cryptoData.length) {
            createBubbleChart();
        }
    }, [cryptoData]);

    const createBubbleChart = () => {
        const width = 1200;
        const height = 600;

        const svg = d3.select('#bubble-chart')
            .attr('width', width)
            .attr('height', height);

        const bubble = d3.pack()
            .size([width, height])
            .padding(2);

        const root = d3.hierarchy({ children: cryptoData })
            .sum(d => d.market_cap);

        bubble(root);

        const node = svg.selectAll('circle')
            .data(root.children)
            .enter().append('g')
            .attr('transform', d => `translate(${d.x},${d.y})`);

        // Append circles for each node
        node.append('circle')
            .attr('r', d => d.r)
            .style('fill', d => {
                if (d.data.price_change_percentage_24h > 0) {
                    return 'green'; // Positive price change
                } else if (d.data.price_change_percentage_24h < 0) {
                    return 'red';   // Negative price change
                } else {
                    return 'grey';  // No price change
                }
            })
        // .on('click', function (event, d) {
        //     // Make the clicked circle brighter
        //     d3.select(this)
        //         .style('fill', 'yellow'); // Change to a brighter color
        // })
        // .call(d3.drag() // Enable dragging
        //     .on('start', dragStarted)
        //     .on('drag', dragged)
        //     .on('end', dragEnded)
        // );

        // // Drag functions
        // function dragStarted(event, d) {
        //     d3.select(this).raise().classed('active', true);
        // }

        // function dragged(event, d) {
        //     d3.select(this)
        //         .attr('cx', d.x = event.x)
        //         .attr('cy', d.y = event.y);
        // }

        // function dragEnded(event, d) {
        //     d3.select(this).classed('active', false);
        // }

        // Light "wobble" animation to make circles look alive
        // node.select('circle')
        //     .transition()
        //     .duration(1000)
        //     .ease(d3.easeSin)
        //     .attr('transform', d => `translate(${d.x + (Math.random() - 0.5) * 2},${d.y + (Math.random() - 0.5) * 2})`)
        //     .on('end', function repeat() {
        //         d3.select(this)
        //             .transition()
        //             .duration(1000)
        //             .ease(d3.easeSin)
        //             .attr('transform', d => `translate(${d.x + (Math.random() - 0.5) * 2},${d.y + (Math.random() - 0.5) * 2})`)
        //             .on('end', repeat);
        //     });


        node.append('text')
            .attr('x', 0) // Center text horizontally within the bubble
            .attr('y', 0) // Center text vertically within the bubble
            .style('text-anchor', 'middle') // Horizontally center the text
            .style('dominant-baseline', 'middle') // Vertically center the text
            .style('font-size', d => `${d.r / 3}px`) // Scale text based on bubble size
            .style('display', d => d.r < 20 ? 'none' : 'block')
            .each(function (d) {
                const element = d3.select(this);

                element.append('tspan')
                    .attr('x', 0)
                    .attr('dy', '1.2em')
                    .text(d.data.name);

                element.append('tspan')
                    .attr('x', 0)
                    .attr('dy', '1.2em')
                    .text(`${d.data.price_change_percentage_24h}%`);
            });
    };

    return (
        <svg id="bubble-chart"></svg>
    );
};

export default Bubbles;
