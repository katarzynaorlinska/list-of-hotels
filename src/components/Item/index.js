import "./item.css";

function Item(props) {
  return (
    <li key={props.id}>
      {props.name} {props.city}
    </li>
  );
}

export default Item;
