/* eslint-disable array-callback-return */
import { useState } from "react";
import Item from "../Item";

function List(props) {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input type="text" placeholder="Search hotel.." onChange={event => {setSearch(event.target.value)}}></input>
      <ul>

        {props.items.filter((item) => {
          if(search === ""){
            return item
          }else if(item.name.toLowerCase().includes(search.toLocaleLowerCase())){
            return item
          }
        }).map((item) => (
          <Item
            key={`hotel-element-main-list-${item.id}`}
            id={item.id}
            name={item.name}
            city={item.location.city}
            images={item.images}
            stars={item.stars}
          />
        ))}
      </ul>
  </div>
  );
}

export default List;
