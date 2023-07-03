export default function EditElement(props) {
  return (
    <div className="">
      {props.elementChosen.type}{" "}
      <CloseButton setElementChosen={props.setElementChosen} />
    </div>
  );
}

function CloseButton(props) {
  return <button onClick={() => props.setElementChosen(null)}>close</button>;
}
