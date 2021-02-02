import "./item.css";

function Item(props) {

  const numbers = [1, 2, 3, 4, 5];
  const stars = numbers.map((number) =>
  <div  className={(number<=props.stars) ? 'list__content--active' : 'list__content--off'}><i class="fas fa-star"></i></div>  
  );

  return (
    <li key={props.id} className="list">
      <div className="list__leftBox">
        <img src={props.images[0]} alt="hotel" className="list__photo"></img>
      </div>
      <div className="list__rightBox">
        <p className="list__content--name">{props.name}</p>
        <p className="list__content--city">{props.city}</p>
        <p className="list__content--rate">Rate: {stars}</p>
      </div>
    </li>
  );
}

export default Item;
