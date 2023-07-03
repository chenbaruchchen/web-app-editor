import { useContext } from "react";
import { ElementContext } from "../../Context/ElementContext";
export default function EditElement(props) {
  const state = useContext(ElementContext);
  return (
    <div className="">
      {state.element.type} <CloseButton />
    </div>
  );
}

function CloseButton(props) {
  const state = useContext(ElementContext);
  return <button onClick={() => state.setElement(null)}>close</button>;
}
