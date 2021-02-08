import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./item.css";

function Item(props) {
  const numbers = [1, 2, 3, 4, 5];
  const stars = numbers.map((number, index) => (
    <div
      key={`stars-${index}-${props.name}`}
      className={
        number <= props.stars ? "list__content--active" : "list__content--off"
      }
    >
      <FontAwesomeIcon icon={faStar} />
    </div>
  ));

  return (
    <li className="list">
      <div className="list__leftBox">
        <img src={props.images[0]} alt="hotel" className="list__photo"></img>
      </div>
      <div className="list__rightBox">
        <Link className="list__content--name" to={`/hotel/${props.id}`}>
          {props.name}
        </Link>
        <p className="list__content--city">{props.city}</p>
        <div className="list__content--rate">Rate: {stars}</div>
      </div>
    </li>
  );
}

export default Item;
