import { ElementContextProvider } from "./Context/ElementContext";
import { MapContextProvider } from "./Context/MapContext";

import { useEffect, useContext } from "react";
import Add from "./components/Add/Add";
import Display from "./components/Display/Display";
import TreeMap from "./components/Tree/TreeMap";
import { map } from "./Class/Tree";
export default function App(params) {
  return (
    <MapContextProvider>
      <ElementContextProvider>
        <div className="flex ">
          <TreeMap />
          <Display />
          <Add />
        </div>
      </ElementContextProvider>
    </MapContextProvider>
  );
}
