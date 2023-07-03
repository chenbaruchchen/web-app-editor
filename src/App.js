import { ElementContextProvider } from "./Context/ElementContext";

import Add from "./components/Add/Add";
import Display from "./components/Display/Display";

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

function Tree(params) {
  return <div className="w-1/5">Tree</div>;
}
