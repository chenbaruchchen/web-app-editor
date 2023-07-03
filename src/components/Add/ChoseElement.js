import { useContext } from "react";
import { ElementContext } from "../../Context/ElementContext";
import Element from "../../Class/Element";
export default function ChoseElement(props) {
  const state = useContext(ElementContext);
  const elementsType = ["div", "h1"];

  function createAndSetElement(type) {
    const element = new Element(type);
    // props.setElementChosen(element);
    state.setElement(element);
  }

  return (
    <div className="">
      {elementsType.map((type) => (
        <div onClick={() => createAndSetElement(type)}>{type}</div>
      ))}
    </div>
  );
}
