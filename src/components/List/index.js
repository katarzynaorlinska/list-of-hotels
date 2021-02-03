import Item from "../Item";

function List(props) {
  return (
    <ul>
      {props.items.map((item) => (
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
  );
}

export default List;
