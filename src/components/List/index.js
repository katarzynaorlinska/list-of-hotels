/* eslint-disable array-callback-return */
import { useState, useEffect } from "react";
import Item from "../Item";

function List(props) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if(search === ""){
       return setSearchResults(props.items);
    }
    const results = props.items.filter(item =>
      item.name.toLowerCase().includes(search.toLocaleLowerCase()));
      setSearchResults(results);
  }, [search, props.items]);

  return (
    <div>
      <input type="text" placeholder="Search hotel.." onChange={event => {setSearch(event.target.value)}}></input>
      <ul>

        {searchResults.map((item) => (
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
