import { useContext } from "react";
import { ElementContext } from "../../Context/ElementContext";
export default function EditElement(props) {
  const state = useContext(ElementContext);
  return (
    <div className="">
      {props.elementChosen}{" "}
      <CloseButton setElementChosen={props.setElementChosen} />
    </div>
  );
}

function CloseButton(props) {
  const state = useContext(ElementContext);
  return <button onClick={() => state.setElement(null)}>close</button>;
}
