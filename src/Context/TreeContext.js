import React, { useState } from "react";

export const TreeContext = React.createContext({
  tree: null,
  setTree: () => {}
});

export const TreeContextProvider = (props) => {
  const setTree = (tree) => {
    setState({ ...state, tree: tree });
  };

  const initState = {
    tree: "null",
    setTree: setTree
  };

  const [state, setState] = useState(initState);

  return (
    <TreeContext.Provider value={state}>{props.children}</TreeContext.Provider>
  );
};
