import { useContext, createElement } from "react";

import { ElementContext } from "../../Context/ElementContext";
import { TreeContext } from "../../Context/TreeContext";
export default function Display(props) {
  const state = useContext(ElementContext);
  let element = state.element;

  return (
    <div className="w-3/5">
      Display
      {element && (
        <element.type {...element.props} {...props}>
          chen
        </element.type>
      )}
      {state.element?.type}
    </div>
  );
}
