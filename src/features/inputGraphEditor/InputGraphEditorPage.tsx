import React, { useEffect } from "react";
import Graph from "./components/Graph";

const InputGraphEditorPage = () => {
  useEffect(() => {
    document.title = "InputGraphEditor";
  }, []);
  return (
    <div className="d-flex">
      <div className="col-5 px-0">
        <Graph /> {/* Use GraphWithFabric here */}
      </div>
    </div>
  );
};

export default InputGraphEditorPage;
