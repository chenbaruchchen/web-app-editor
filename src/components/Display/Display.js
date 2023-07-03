import { useContext, createElement } from "react";
import { ElementContext } from "../../Context/ElementContext";
export default function Display(props) {
  const state = useContext(ElementContext);
  console.log(state);
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
