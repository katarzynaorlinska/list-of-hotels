/* eslint-disable array-callback-return */
import Item from "../Item";
import useSearch from "../../hooks/useSearch";

function List(props) {
  const { setSearch, searchResults } = useSearch(props.items);

  return (
    <div>
      <input
        type="text"
        placeholder="Search hotel.."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      ></input>
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
