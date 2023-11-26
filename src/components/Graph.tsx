import React, { useEffect, useRef, useState, useContext } from 'react';
import * as d3 from 'd3';
import { Button, Buttons } from './Button';
import Popup from './Popup';
import { BASE_ADDR } from '../config'
import { ResponseContext } from './DashBoard';
import axios from 'axios'

import styled from 'styled-components';

const CustomDiv = styled.div`
.svgDualGraph {
  cursor: crosshair;
  display: block;
  background: white;
  border: 2px solid black;
  margin: 2px;
}
.edge {
  stroke: #1C4C82;
  stroke-width: 3px;
  stroke-linecap: round;
  stroke-linejoin: round;
  cursor: default;
}
.drag-line {
  stroke: #1C4C82;
  stroke-width: 3px;
  stroke-linecap: round;
  stroke-linejoin: round;
  cursor: default;
}
.vertex {
  cursor: pointer;
}
.label{
  fill: white;
  text-anchor: middle;
  dominant-baseline: middle;
  pointer-events: none;
  font-size: 16px;
  stroke: none;
}
`

interface Node {
    id: number,
    x: number,
    y: number,
    label: string,
    color: string,
    width_min?: number,
    width_max?: number,
    height_min?: number,
    height_max?: number
}

const Graph = () => {
    const COLOR = "#1C4C82";
    const RADIUS = 40;
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [nodes, setNodes] = useState<Node[]>([]);
    const [links, setLinks] = useState<{ source: number; target: number }[]>([]);
    const [dragging, setDragging] = useState(false);
    const [popup, setPopup] = useState(false);
    const [dragStartNode, setDragStartNode] = useState<{ id: number; x: number; y: number } | null>(null);
    const [selectedNode, setSelectedNode] = useState<Node | null>(null);
    const { setResp } = useContext(ResponseContext);

    function isNodePossible(x: number, y: number, nodes: Node[]) {
        for (let i = 0; i < nodes.length; i++) {
            let calc = ((nodes[i].x - x) ** 2 + (nodes[i].y - y) ** 2);
            if (calc < (RADIUS * 2) ** 2) return false;
        }
        return true;
    }

    useEffect(() => {
        const svg = d3.select(svgRef.current);

        svg.on('dblclick', (event: MouseEvent) => {
            event.preventDefault();
            const [x, y] = d3.pointer(event);
            let check = isNodePossible(x, y, nodes);
            if (check) {
                const id = nodes.length;
                const label = `Node ${nodes.length + 1}`;
                const color = COLOR;
                setNodes([...nodes, { id, x, y, label, color }]);
            }
        });

        svg.on('click', (event: MouseEvent) => {
            console.log("click working");
            event.preventDefault();
            const [x, y] = d3.pointer(event);
            let node = findNode(x, y);
            if (node) {
                setPopup(true);
                setSelectedNode(node);
            }
        })

        svg.on('mousedown', (event: MouseEvent) => {
            event.preventDefault();
            const [x, y] = d3.pointer(event);
            const clickedNode = findNode(x, y);

            if (clickedNode) {
                // Clicked on a node, source the drag line
                setDragging(true);
                setDragStartNode(clickedNode);
            }
        });

        svg.on('mousemove', (event: MouseEvent) => {
            event.preventDefault();
            if (dragging && dragStartNode) {
                // Update the drag line while dragging the mouse
                const [x, y] = d3.pointer(event);
                drawDragLine(dragStartNode.x, dragStartNode.y, x, y);
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

    // function getRandomColor(): string {
    //     const red = Math.floor(Math.random() * 256)
    //         .toString(16)
    //         .padStart(2, "0");
    //     const green = Math.floor(Math.random() * 256)
    //         .toString(16)
    //         .padStart(2, "0");
    //     const blue = Math.floor(Math.random() * 256)
    //         .toString(16)
    //         .padStart(2, "0");
    //     return `#${red}${green}${blue}`;
    // }

    function findNode(x: number, y: number) {
        return nodes.find((node) => {
            const dx = x - node.x;
            const dy = y - node.y;
            return Math.sqrt(dx * dx + dy * dy) < RADIUS; // Node radius for hit detection
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
            .attr('r', RADIUS)
            .merge(nodeSelection)
            .attr('cx', (d) => d.x)
            .attr('cy', (d) => d.y)
            .style('fill', (d) => d.color)
            .on('mouseover', (event, d) => {
                // Show label on mouseover
                svg.append('text')
                    .attr('class', 'label')
                    .attr('x', d.x)
                    .attr('y', d.y)
                    .text(d.label);
            })
            .on('mouseout', () => {
                svg.select('.label').remove();
            });
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
                return sourceNode.x;
            })
            .attr('y1', (d) => {
                const sourceNode = nodes.find((node) => node.id === d.source)!;
                return sourceNode.y;
            })
            .attr('x2', (d) => {
                const targetNode = nodes.find((node) => node.id === d.target)!;
                return targetNode.x;
            })
            .attr('y2', (d) => {
                const targetNode = nodes.find((node) => node.id === d.target)!;
                return targetNode.y;
            });

        linkSelection.exit().remove();
    }
    update();

    let resetBoard = () => {
        setLinks([]);
        setNodes([]);
        setDragging(false);
        setDragStartNode(null);
    }

    let emitData = (floorPlanType: string) => {
        // No JSON Stringify needed when using emit
        let graphData = {
            "multiple": false,
            "rectangular": false,
            "nodes": nodes,
            "edges": links
        }
        axios.post(BASE_ADDR + floorPlanType, graphData)
            .then((response) => {
                let resp = response.data.floorplans;
                console.log(resp);
                setResp(resp);
            });
    }

    const callback = (minWidth?: number, maxWidth?: number, minHeight?: number, maxHeight?: number, label?: string, dlt?: boolean) => {
        setPopup(false);
        if (dlt) {
            setLinks(links.filter((link: { source: number; target: number }) => (link.source !== selectedNode?.id && link.target !== selectedNode?.id)))
            setNodes(nodes.filter((node: Node) => node.id !== selectedNode?.id))
        } else {
            const newNodes: Node[] = nodes.map((node: Node) => {
                console.log('inside map');

                if (node.id === selectedNode?.id) {
                    const newNode: Node = {
                        ...node,
                        ['label']: label || node.label,
                        ['width_min']: minWidth,
                        ['width_max']: maxWidth,
                        ['height_min']: minHeight,
                        ['height_max']: maxHeight,
                    };
                    return newNode;
                } else {
                    return node;
                }
            });
            setNodes(newNodes);
        }
    }

    return (
        <div>
            {popup ?
                <Popup
                    setPopupToFalse={callback}
                    label={selectedNode?.label}
                    minWidth={selectedNode?.width_min}
                    maxWidth={selectedNode?.width_max}
                    minHeight={selectedNode?.height_min}
                    maxHeight={selectedNode?.height_max}
                />
                : null}
            <CustomDiv>
                <svg ref={svgRef} className="svgDualGraph" width={600} height={600}></svg>
                <Buttons className='overflow-hidden text-wrap d-block'>
                    <Button id="sendDataButton" className="orange btn-circle d-inline-block" onClick={() => emitData('/irregular')}>Irregular</Button>
                    <Button id="sendDataButton" className="bg-success text-light btn-circle d-inline-block" onClick={() => emitData('/rectangular')}>Rectangular</Button>
                    <Button id="sendDataButton" className="blue btn-circle d-inline-block" onClick={() => emitData('/lshape')}>L Shape</Button>
                    <Button id="sendDataButton" className="citron btn-circle d-inline-block" onClick={() => emitData('/ushape')}>U Shape</Button>
                    <Button id="sendDataButton" className="sand btn-circle d-inline-block" onClick={() => emitData('/tshape')}>T Shape</Button>
                    <Button id="sendDataButton" className="purple btn-circle d-inline-block" onClick={() => emitData('/zshape')}>Z Shape</Button>
                    <Button id="sendDataButton" className="teal btn-circle d-inline-block" onClick={() => emitData('/staircaseshape')}>Staircase Shape</Button>
                    <Button className="red btn-circle m-2 d-inline-block" onClick={resetBoard}>Reset</Button>
                </Buttons>
            </CustomDiv>
        </div>
    );
};

export default Graph;

