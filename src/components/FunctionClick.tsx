function FunctionClick() {
  const handleClick = () => {
    console.log(" Btn was clicked");
  };
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default FunctionClick;
