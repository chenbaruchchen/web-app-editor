import React, { useState } from "react";

export const MapContext = React.createContext({
  map: null,
  setMap: () => {}
});

export const MapContextProvider = (props) => {
  const setMap = (map) => {
    setState({ ...state, map: map });
  };

  const initState = {
    map: "null",
    setMap: setMap
  };

  const [state, setState] = useState(initState);

  return (
    <MapContext.Provider value={state}>{props.children}</MapContext.Provider>
  );
};
