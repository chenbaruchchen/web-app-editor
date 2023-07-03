import { ElementContextProvider } from "./Context/ElementContext";

import Add from "./components/Add/Add";
import Display from "./components/Display/Display";
import Tree from "./components/Tree/Tree";

export default function App(params) {
  // const ElementContext = createContext(null);

  return (
    <ElementContextProvider>
      <div className="flex ">
        <Tree />
        <Display />
        <Add />
      </div>
    </ElementContextProvider>
  );
}
