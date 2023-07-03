import { useContext } from "react";
import { ElementContext } from "../../Context/ElementContext";
import ChoseElement from "./ChoseElement";
import EditElement from "./EditElement";

export default function Add(params) {
  const state = useContext(ElementContext);
  return (
    <div className="w-1/5">
      {!state.element ? <ChoseElement /> : <EditElement />}
    </div>
  );
}
