function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetParent("Faris")}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;
