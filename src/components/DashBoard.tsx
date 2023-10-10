import React, { useEffect } from 'react'
// import io from 'socket.io-client'
import { GRID_SNAP } from '../config'


// import { Card } from '~/components/Card'
// import { Button } from '~/components/Button'
// import { Form } from '~/components/Form'
// import RFP from '~/components/RFP'
// import Graphler from '~/components/Graphler'
import Graph from './Graph'
import DrawBoard from './DrawingBoard'
// import { Socket } from 'socket.io-client';

export default function Dashboard() {
//   let [socket, setSocket] = useState<Socket | null>(null)

  useEffect(() => {
    document.title = 'Dashboard'
    // setSocket(io(BASE_ADDR))
  }, [])

  let resp  = {};

  return (
    <>
      <div className="col-12 title">
        <h1>Planar Web Dashboard</h1>
      </div>
      <div className="col-5 px-0">
            <Graph resp = {resp}/>
      </div>
      <div className="col-7 px-0">
            <DrawBoard size={480} snap = {GRID_SNAP} resp={resp}/>
      </div>
    </>
  )
}
