import { useContext } from "react";
import { ElementContext } from "../../Context/ElementContext";
export default function Display(props) {
  const state = useContext(ElementContext);
  console.log(state);

  return <div className="w-3/5">Display {state.element?.type}</div>;
}
