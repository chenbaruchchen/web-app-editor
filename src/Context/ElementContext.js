import React, { useState } from "react";

export const ElementContext = React.createContext({
  element: null,
  setElement: () => {}
});

export const ElementContextProvider = (props) => {
  const setElement = (element) => {
    setState({ ...state, element: element });
  };

  const initState = {
    element: null,
    setElement: setElement
  };

  const [state, setState] = useState(initState);

  return (
    <ElementContext.Provider value={state}>
      {props.children}
    </ElementContext.Provider>
  );
};
