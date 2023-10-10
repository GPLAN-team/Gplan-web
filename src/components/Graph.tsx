import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Button } from './Button';
import { BASE_ADDR } from '../config'
import styled from 'styled-components'
const CustomDiv = styled.div`
.svgDualGraph {
  cursor: crosshair;
  display: block;
  background: #eeeeee;
  border: 2px solid orange;
  margin: 2px;
}
.edge {
  stroke: #888;
  stroke-width: 3px;
  stroke-linecap: round;
  stroke-linejoin: round;
  cursor: default;
}
.drag-line {
  stroke: #888;
  stroke-width: 3px;
  stroke-linecap: round;
  stroke-linejoin: round;
  cursor: default;
}
.vertex {
  cursor: pointer;
}
.vertex:hover {
  stroke: #333;
  opacity: 0.8;
}

.label{
  text-anchor: middle;
  pointer-events: none;
  font-size: 14px;
  stroke: none;
}
`

const Graph = (resp: any) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [nodes, setNodes] = useState<{ id: number; centre: {x: number; y: number }}[]>([]);
    const [links, setLinks] = useState<{ source: number; target: number }[]>([]);
    const [dragging, setDragging] = useState(false);
    const [dragStartNode, setDragStartNode] = useState<{ id: number; centre: {x: number; y: number }} | null>(null);

    useEffect(() => {
        const svg = d3.select(svgRef.current);

        svg.on('dblclick', (event: MouseEvent) => {
            event.preventDefault();
            const [x, y] = d3.pointer(event);
            const id = nodes.length + 1;
            const centre = {x, y};
            setNodes([...nodes, { id, centre }]);
        });

        svg.on('mousedown', (event: MouseEvent) => {
            event.preventDefault();
            const [x, y] = d3.pointer(event);
            const clickedNode = findNode(x, y);

            if (clickedNode) {
                // Clicked on a node, start the drag line
                setDragging(true);
                setDragStartNode(clickedNode);
            }
        });

        svg.on('mousemove', (event: MouseEvent) => {
            event.preventDefault();
            if (dragging && dragStartNode) {
                // Update the drag line while dragging the mouse
                const [x, y] = d3.pointer(event);
                drawDragLine(dragStartNode.centre.x, dragStartNode.centre.y, x, y);
            }
        });

        svg.on('mouseup', (event: MouseEvent) => {
            if (dragging && dragStartNode) {
                // Mouseup after dragging, create an edge if released on a node
                const [x, y] = d3.pointer(event);
                const endNode = findNode(x, y);

                if (endNode && dragStartNode.id !== endNode.id) {
                    setLinks([...links, { source: dragStartNode.id, target: endNode.id }]);
                }

                // Remove the drag line
                removeDragLine();
                setDragging(false);
                setDragStartNode(null);
            }
        });
    });

    function findNode(x: number, y: number) {
        return nodes.find((node) => {
            const dx = x - node.centre.x;
            const dy = y - node.centre.y;
            return Math.sqrt(dx * dx + dy * dy) < 20; // Node radius for hit detection
        });
    }

    function drawDragLine(x1: number, y1: number, x2: number, y2: number) {
        const svg = d3.select(svgRef.current);
        removeDragLine();
        svg.append<SVGLineElement>('line')
            .attr('class', 'drag-line')
            .attr('x1', x1)
            .attr('y1', y1)
            .attr('x2', x2)
            .attr('y2', y2);
    }

    function removeDragLine() {
        const svg = d3.select(svgRef.current);
        svg.select('.drag-line').remove();
    }

    function update() {
        const svg = d3.select(svgRef.current);

        const nodeSelection = svg.selectAll<SVGCircleElement, any>('.vertex').data(nodes, (d: any) => d.id);

        nodeSelection
            .enter()
            .append('circle')
            .attr('class', 'vertex')
            .attr('r', 20)
            .merge(nodeSelection)
            .attr('cx', (d) => d.centre.x)
            .attr('cy', (d) => d.centre.y)
            .style('fill', 'lightblue')
        //   .call(d3.drag<SVGCircleElement, any>().on('drag', (event, d) => {
        //     // Drag behavior for nodes
        //     d.x = event.x;
        //     d.y = event.y;
        //     update();
        //   }));

        nodeSelection.exit().remove();

        const linkSelection = svg.selectAll<SVGLineElement, any>('.edge').data(links);

        linkSelection
            .enter()
            .append('line')
            .attr('class', 'edge')
            .merge(linkSelection)
            .attr('x1', (d) => {
                const sourceNode = nodes.find((node) => node.id === d.source)!;
                return sourceNode.centre.x;
            })
            .attr('y1', (d) => {
                const sourceNode = nodes.find((node) => node.id === d.source)!;
                return sourceNode.centre.y;
            })
            .attr('x2', (d) => {
                const targetNode = nodes.find((node) => node.id === d.target)!;
                return targetNode.centre.x;
            })
            .attr('y2', (d) => {
                const targetNode = nodes.find((node) => node.id === d.target)!;
                return targetNode.centre.y;
            });

        linkSelection.exit().remove();
    }
    update();

    let emitData = async () => {
        // No JSON Stringify needed when using emit
        let graphData = { 
            "multiple": true,
            "rectangular": false,
            "nodes": nodes, 
            "edges": links
        }
        const requestOptions: RequestInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add any other headers as needed
            },
            body: JSON.stringify(graphData),
        };

        // Make a POST request with fetch
        fetch(BASE_ADDR, requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                resp = response.json();
            })
            .then((data) => {
                // Handle the response data here
                console.log(data);
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    }

    return (
        <div>
            <CustomDiv>
                <svg ref={svgRef} className="svgDualGraph" width={600} height={600}></svg>
            </CustomDiv>
            <Button id="sendDataButton" className="orange btn-circle" onClick={emitData}>Send</Button>
        </div>
    );
};

export default Graph;

