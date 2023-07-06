import { ElementContextProvider } from "./Context/ElementContext";
import { TreeContextProvider } from "./Context/TreeContext";

// import { useEffect, useContext } from "react";
import Add from "./components/Add/Add";
import Display from "./components/Display/Display";
// import TreeMap from "./components/Tree/TreeMap";
import Tree from "./components/Tree/Tree";

// import { map } from "./Class/Tree";
export default function App(params) {
  return (
    <TreeContextProvider>
      <ElementContextProvider>
        <div className="flex ">
          <Tree />
          <Display />
          <Add />
        </div>
      </ElementContextProvider>
    </TreeContextProvider>
  );
}
