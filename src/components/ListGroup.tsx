import { useState } from "react";

interface Props {
  header: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup(props: Props) {
  const { header, items, onSelectItem } = props;
  const [selectedItem, setSelectedItem] = useState(-1);

  function handleClick(index: number) {
    setSelectedItem(index);
    onSelectItem(items[index]);
  }

  function getItemClass(index: number): string {
    let baseClass: string = "list-group-item";
    if (index === selectedItem) baseClass += " active";
    return baseClass;
  }

  return (
    <>
      <h1>{header}</h1>
      {items.length === 0 && <p>Item not found</p>}
      <ul className="list-group list-group-light">
        {items.map((city, ix) => (
          <li
            className={getItemClass(ix)}
            key={ix}
            onClick={() => handleClick(ix)}
            style={{ cursor: "pointer" }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
