import SignUpPage from "./components/SignUpPage";
import Login from "./components/Login";

const App = () => {
  return <>
    <SignUpPage/>
  </>
  //   const createNode = (x: number, y: number) => {
  //     const color = randomColor();
  //     setState((prevState) => {
  //       const id = uuidv4();
  //       const newNode = { id, label: `Node ${id}`, color, x, y };
  //       return {
  //         graph: {
  //           nodes: [...prevState.graph.nodes, newNode],
  //           edges: [...prevState.graph.edges],
  //         },
  //         events: prevState.events,
  //       };
  //     });
  //   };

  //   const [state, setState] = useState({
  //     graph: {
  //       nodes: [
  //         { id: "1", label: "Kitchen", color: randomColor() },
  //         { id: "2", label: "Node 2", color: randomColor() },
  //         { id: "3", label: "Node 3", color: randomColor() },
  //         { id: "4", label: "Node 4", color: randomColor() },
  //         { id: "5", label: "Node 5", color: randomColor() },
  //       ],
  //       edges: [
  //         { from: "1", to: "2" },
  //         { from: "1", to: "3" },
  //         { from: "2", to: "4" },
  //         { from: "2", to: "5" },
  //       ],
  //     },
  //     events: {
  //       click: ({
  //         pointer: {
  //           canvas: { x, y },
  //         },
  //       }: {
  //         pointer: { canvas: { x: number; y: number } };
  //       }) => createNode(x, y),
  //     },
  //   });

  //   return (
  //     <div>
  //       <Graph
  //         graph={state.graph}
  //         options={options}
  //         events={state.events}
  //         style={{ height: "640px" }}
  //       />
  //     </div>
  //   );
};

export default App;
