import React, { useEffect, useState, createContext } from 'react'
import { GRID_SNAP } from '../config'
import Graph from './Graph'
import DrawingBoard from './DrawingBoard'

// Create a new context and export
export const ResponseContext = createContext({ resp: [], setResp: ([]: any) => { } });

// Create a Context Provider
const ResponseContextProvider = ({ children }: { children: any }) => {
    const [resp, setResp] = useState([]);

    return (
        <ResponseContext.Provider value={{ resp, setResp }}>
            {children}
        </ResponseContext.Provider>
    );
};

export default function Dashboard() {

    useEffect(() => {
        document.title = 'Dashboard'
    }, [])

    return (
        <>
            <div className="col-12 title">
                <h1>GPLAN</h1>
                <h3 className = "text-primary">Double click to insert a new node. Drag between nodes to add an edge</h3>
            </div>
            <ResponseContextProvider>
                <div className = "d-flex">
                    <div className="col-5 px-0 ">
                        <Graph />
                    </div>
                    <div className="px-0">
                        <DrawingBoard size={600} snap={GRID_SNAP} />
                    </div>
                </div>
            </ResponseContextProvider >
        </>
    )
}
