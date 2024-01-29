import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

//immutable props
function ListGroup({items, heading, onSelectItem}: Props) {
    //Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);
    // arr[0] // variable (selectedIndex)
    // arr[1] // updater function

  
    return (
      <>
        <h1>{heading}</h1>
        {items.length === 0 && <p>No item found</p>}
        <ul className="list-group">
          {items.map((city, index) => (
            <li
              className= {selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
              key={city}
              onClick={() => {setSelectedIndex(index); onSelectItem(city);}}
            >
              {city}
            </li>
          ))}
        </ul>
      </>
    );
  }
  
  export default ListGroup;
  