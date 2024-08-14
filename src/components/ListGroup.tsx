function ListGroup() {
  const Items = ["Lahore", "Karachi", "Islamabad", "Mailsi"];
  Items.length = 0;
  return (
    <>
      <h1>List Group</h1>
      {Items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {Items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
