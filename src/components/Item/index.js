import "./item.css";

function Item(props) {
  return (
    <li key={props.id} className="containerHotel">
      <div className="leftBox">
        <img src={props.images[0]} alt="hotel" className="photoHotel"></img>
      </div>
      <div className="rightBox">
        <p>{props.name}</p>
        <p>{props.city}</p>
        <p>Rate: {props.stars}</p>
      </div>
    </li>
  );
}

export default Item;
