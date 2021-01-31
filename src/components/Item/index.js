import "./item.css";

function Item(props) {
  return (
    <li key={props.id} className="list">
      <div className="list__leftBox">
        <img src={props.images[0]} alt="hotel" className="list__photo"></img>
      </div>
      <div className="list__rightBox">
        <p className="list__content--name">{props.name}</p>
        <p className="list__content--city">{props.city}</p>
        <p className="list__content--rate">Rate: {props.stars}</p>
      </div>
    </li>
  );
}

export default Item;
