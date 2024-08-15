import { useState } from "react";
function ListGroup() {
  const Items = ["Lahore", "Karachi", "Islamabad", "Mailsi"];
  const [selectedIndex, setSelectedItem] = useState(-1);
  return (
    <>
      <h1>List Group</h1>
      {Items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {Items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedItem(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
