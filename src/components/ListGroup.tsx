import { MouseEvent } from "react";

const ListGroup = () => {
  const items = ["galle", "colombo", "kandy"];

  //event handler
  const handleClick = (e: MouseEvent) => console.log(e);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className="list-group-item"
            //reference
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
