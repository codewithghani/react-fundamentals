import { ReactNode, useState } from "react";
function ListGroup(props: { children: ReactNode; category: string }) {
  const Items = ["Lahore", "Karachi", "Islamabad", "Mailsi"];
  const [selectedIndex, setSelectedItem] = useState(-1);
  return (
    <>
      <h1>List Group - {props.category}</h1>
      {Items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {props.children}
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
