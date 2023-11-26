import React, { useState, useRef, useEffect, useContext } from 'react';
import { fabric } from 'fabric';
import { Button, Buttons } from './Button'
import { ResponseContext } from './DashBoard';

interface DrawingBoardProps {
    size: number;
    snap: number;
}

export default function DrawingBoard({ size, snap }: DrawingBoardProps) {
    const canRef = useRef<fabric.Canvas | null>(null);
    const [listRFP, setListRFP] = useState<any[]>([]);
    const [indexRFP, setIndexRFP] = useState<number>(0);
    const [gridIsOn, setGridIsOn] = useState<boolean>(true);
    const { resp } = useContext(ResponseContext);

    const drawGrid = (canvas: fabric.Canvas) => {
        // Generate Grid Lines
        for (let i = 0; i < size / snap; i++) {
            canvas.add(new fabric.Line([i * snap, 0, i * snap, size], { stroke: '#ccc', selectable: false }));
            canvas.add(new fabric.Line([0, i * snap, size, i * snap], { stroke: '#ccc', selectable: false }));
        }

        // Add snap-to-grid on whenever rectangle is moved, scaled or rotated
        canvas.on('object:moving', function (options: any) {
            options.target.set({
                left: Math.round(options.target.left / snap) * snap,
                top: Math.round(options.target.top / snap) * snap,
            });
        });
        canvas.on('object:scaled', function (options: any) {
            options.target.set({
                scaleX: Math.round(options.target.scaleX * 2) / 2,
                scaleY: Math.round(options.target.scaleY * 2) / 2,
                left: Math.round(options.target.left / snap) * snap,
                top: Math.round(options.target.top / snap) * snap,
            });
        });
        canvas.on('object:rotated', function (options: any) {
            options.target.set({
                angle: Math.round(options.target.angle / 90) * 90,
                left: Math.round(options.target.left / snap) * snap,
                top: Math.round(options.target.top / snap) * snap,
            });
        });
        canvas.on('mouse:dblclick', function () {
            canvas.remove(canvas.getActiveObject() as fabric.Object);
        });
    };

    const createRectangle = (color: string) => {
        const rect = new fabric.Rect({
            width: 2 * snap,
            height: 2 * snap,
            fill: color,
            left: 0,
            top: 0,
        });
        canRef.current?.add(rect);
    };

    const resetDrawBoard = () => {
        // Check: https://stackoverflow.com/questions/11829786/delete-multiple-objects-at-once-on-a-fabric-js-canvas-in-html5
        const rects = canRef.current?.getObjects().filter((obj: any) => obj['type'] === 'rect');
        rects?.forEach((rect: any) => {
            canRef.current?.remove(rect);
        });
    };

    const resetCompleteBoard = () => {
        resetDrawBoard();
        setIndexRFP(0);
        setListRFP([]);
    }

    const prevRFP = () => {
        if (!listRFP.length) return;
        setIndexRFP((indexRFP - 1 + listRFP.length) % listRFP.length);
    };

    const nextRFP = () => {
        if (!listRFP.length) return;
        setIndexRFP((indexRFP + 1) % listRFP.length);
    };

    const resetLines = () => {
        // Check: https://stackoverflow.com/questions/11829786/delete-multiple-objects-at-once-on-a-fabric-js-canvas-in-html5
        if (gridIsOn) {
            const lines = canRef.current?.getObjects().filter((obj: any) => obj['type'] === 'line');
            lines?.forEach((line: any) => {
                canRef.current?.remove(line);
            });
            setGridIsOn(false);
        } else {
            for (let i = 0; i < size / snap; i++) {
                canRef.current?.add(new fabric.Line([i * snap, 0, i * snap, size], { stroke: '#ccc', selectable: false }));
                canRef.current?.add(new fabric.Line([0, i * snap, size, i * snap], { stroke: '#ccc', selectable: false }));
                const rects = canRef.current?.getObjects().filter((obj: any) => obj['type'] === 'rect');
                rects?.forEach((rect: any) => {
                    canRef.current?.bringToFront(rect);
                });
            }
            setGridIsOn(true);
        }
    };

    const loadRFP = () => {
        if (!listRFP.length) return;
        resetDrawBoard();
        const rects = listRFP[indexRFP];
        rects.forEach((rdata: any) => {
            const rect = new fabric.Rect({
                left: Number(rdata['left']) + Number(snap*6),
                top: Number(rdata['top']) + Number(snap*6),
                width: Number(rdata['width']),
                height: Number(rdata['height']),
                fill: rdata['color'],
                selectable: true
            });
            canRef.current?.add(rect);
        });
        console.log('[loadRFP] Loaded RFP!');

    };

    const submitRFPJSON = () => {
        // Implement your submitRFPJSON logic here
    };

    // Setup the entire canvas grid once application starts
    useEffect(() => {
        if (canRef.current) {
            canRef.current.dispose();
        }
    
        // Create a new fabric.Canvas instance
        const canvas = new fabric.Canvas('canvas', { backgroundColor: '#eee', width: 600, height: 600, selection: true });
        canRef.current = canvas;
        drawGrid(canvas);
    }, []);

    // Automatically, receive RFPs if socket emits message on event 'load'
    useEffect(() => {
        if (!resp) return;

        // socket.on('load', (recv: any) => {
        try {
            console.log('[loadRFP] Fetched List of RFP Graphs!');
            setListRFP(resp);
            setIndexRFP(0);
        } catch (err) {
            console.log(err);
        }
        // });
    }, [resp]);

    // Render loadRFP on every time indexRFP or listRFP changes
    useEffect(() => {
        loadRFP();
    }, [indexRFP, listRFP]);

    return (
        <div>
            <div>
                <canvas id="canvas" width={size} height={size}></canvas>
            </div>
            <div>
                <Buttons>
                    <Button className="red newRectangle" onClick={() => createRectangle("#f64e60")}> Red </Button>
                    <Button className="purple newRectangle" onClick={() => createRectangle("#8950fc")}> Purple </Button>
                    <Button className="orange newRectangle" onClick={() => createRectangle("orange")}> Orange </Button>
                    <Button className="dark newRectangle" onClick={() => createRectangle("black")}> Black </Button>
                    <Button className="sand newRectangle" onClick={() => createRectangle("#D09656")}> Brown </Button>
                </Buttons>
            </div>
            {(resp !== null) &&
                <div>
                    <Buttons>
                        <Button className="blue btn" onClick={prevRFP}> Prev</Button>
                        <Button className="danger btn-circle" onClick={resetCompleteBoard}>Reset</Button>
                        <Button className="blue btn" onClick={nextRFP}> Next </Button>
                        <Button className="text-dark btn-circle" onClick={resetLines}> Grid On/Off </Button>
                    </Buttons>
                    <div>
                        <h3>{(listRFP.length > 0) ? indexRFP + 1 : 0} out of {listRFP.length} RFPs</h3>
                    </div>
                </div>
            }
        </div>
    )
}
