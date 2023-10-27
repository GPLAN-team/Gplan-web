import React, { useEffect, useRef, useState, useContext } from 'react';
import * as d3 from 'd3';
import { Button, Buttons } from './Button';
import { BASE_ADDR } from '../config'
import { NameContext } from './DashBoard';
import axiosInstance from '../axiosInstance';
import axios from 'axios'
// import LocalStorageService from './services/storage/localstorageservice'

import styled from 'styled-components';

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

const Graph = () => {
    const RADIUS = 20;
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [nodes, setNodes] = useState<{ id: number; x: number; y: number, label: string, color: string }[]>([]);
    const [links, setLinks] = useState<{ source: number; target: number }[]>([]);
    const [dragging, setDragging] = useState(false);
    const [dragStartNode, setDragStartNode] = useState<{ id: number; x: number; y: number } | null>(null);
    const { setResp } = useContext(NameContext);

    // useEffect(() => {
    //     axios.interceptors.request.use(
    //         config => {
    //             const token = localStorage.getAccessToken()
    //             if (token) {
    //                 config.headers['Authorization'] = 'Bearer ' + token
    //             }
    //             // config.headers['Content-Type'] = 'application/json';
    //             return config
    //         },
    //         error => {
    //             Promise.reject(error)
    //         }
    //     )
    // }, [])

    function isNodePossible(x: number, y: number, nodes: { id: number; x: number; y: number, label: string, color: string }[]) {

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
                const label = `${nodes.length + 1}`;
                const color = getRandomColor();
                setNodes([...nodes, { id, x, y, label, color }]);
            }
        });

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
    //     const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    //     return randomColor;
    //   }

    function getRandomColor(): string {
        const red = Math.floor(Math.random() * 256)
            .toString(16)
            .padStart(2, "0");
        const green = Math.floor(Math.random() * 256)
            .toString(16)
            .padStart(2, "0");
        const blue = Math.floor(Math.random() * 256)
            .toString(16)
            .padStart(2, "0");
        return `#${red}${green}${blue}`;
    }
    
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

    let emitDataIrregular = () => {
        // No JSON Stringify needed when using emit
        let graphData = {
            "multiple": true,
            "rectangular": false,
            "nodes": nodes,
            "edges": links
        }
        axios.post(BASE_ADDR+'/irregular', graphData)
            .then((response) => {
                let resp = response.data.floorplans;
                console.log(resp);
                setResp(resp);
            });
    }

    let emitDataRectangular = () => {
        // No JSON Stringify needed when using emit
        let graphData = {
            "multiple": true,
            "rectangular": false,
            "nodes": nodes,
            "edges": links
        }
        axios.post(BASE_ADDR+'/rectangular', graphData)
            .then((response) => {
                let resp = response.data.floorplans;
                console.log(resp);
                setResp(resp);
            });
    }

    let emitDataLshape = () => {
        // No JSON Stringify needed when using emit
        let graphData = {
            "multiple": false,
            "rectangular": false,
            "nodes": nodes,
            "edges": links
        }
        axios.post(BASE_ADDR+'/lshape', graphData)
            .then((response) => {
                let resp = response.data.floorplans;
                console.log(resp);
                setResp(resp);
            });
    }

    let emitDataUshape = () => {
        // No JSON Stringify needed when using emit
        let graphData = {
            "multiple": false,
            "rectangular": false,
            "nodes": nodes,
            "edges": links
        }
        axios.post(BASE_ADDR+'/ushape', graphData)
            .then((response) => {
                let resp = response.data.floorplans;
                console.log(resp);
                setResp(resp);
            });
    }

    let emitDataTshape = () => {
        // No JSON Stringify needed when using emit
        let graphData = {
            "multiple": false,
            "rectangular": false,
            "nodes": nodes,
            "edges": links
        }
        axios.post(BASE_ADDR+'/tshape', graphData)
            .then((response) => {
                let resp = response.data.floorplans;
                console.log(resp);
                setResp(resp);
            });
    }

    let emitDataZshape = () => {
        let graphData = {
            "multiple": false,
            "rectangular": false,
            "nodes": nodes,
            "edges": links
        }
        axios.post(BASE_ADDR+'/zshape', graphData)
            .then((response) => {
                let resp = response.data.floorplans;
                // console.log(resp);
                setResp(resp);
            });
    }
    
    let resetBoard = () => {
        setLinks([]);
        setNodes([]);
        setDragging(false);
        setDragStartNode(null);
    }    
    let emitDataStaircase = () => {
        // No JSON Stringify needed when using emit
        let graphData = {
            "multiple": false,
            "rectangular": false,
            "nodes": nodes,
            "edges": links
        }
        axios.post(BASE_ADDR+'/staircaseshape', graphData)
            .then((response) => {
                let resp = response.data.floorplans;
                console.log(resp);
                setResp(resp);
            });
    }
    
    return (
        <div>
            <CustomDiv>
                <svg ref={svgRef} className="svgDualGraph" width={600} height={600}></svg>
            <Buttons>
                <Button id="sendDataButton" className="orange btn-circle" onClick={emitDataIrregular}>Irregular</Button>
                <Button id="sendDataButton" className="red btn-circle" onClick={emitDataRectangular}>Rectangular</Button>
                <Button id="sendDataButton" className="blue btn-circle" onClick={emitDataLshape}>L Shape</Button>
                <Button id="sendDataButton" className="citron btn-circle" onClick={emitDataUshape}>U Shape</Button>
                <Button id="sendDataButton" className="sand btn-circle" onClick={emitDataTshape}>T Shape</Button>
                <Button id="sendDataButton" className="purple btn-circle" onClick={emitDataZshape}>Z Shape</Button>    
                <Button id="sendDataButton" className="teal btn-circle" onClick={emitDataStaircase}>Staircase Shape</Button>    
                <Button className="red btn-circle m-2 d-inline-block" onClick={resetBoard}>Reset</Button>
            </Buttons>
            </CustomDiv>
            {/* <Button id="sendDataButton" className="orange btn-circle d-inline-block" onClick={emitData}>Send</Button> */}
        </div>
    );
};

export default Graph;

