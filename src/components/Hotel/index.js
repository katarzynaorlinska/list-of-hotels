import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";

import "./hotel.css";

function Hotel(props) {
  const { id } = useParams();
  const item = props.items.find((element) => id === element.id.toString());

  if(!item){
    return <span>No hotel</span>
  }

   return <div>
      <div className="hotel">
        <div className="hotel__name">{item.name}</div>
        <div className="hotel__container">
          <div className="hotel__leftBox">
            <img src={item.images[0]} alt="hotel" className="hotel__photo hotel__photo--big"></img>
            <div className="hotel__leftBox--small">
              <img src={item.images[1]} alt="hotel" className="hotel__photo hotel__photo--small"></img>
              <img src={item.images[2]} alt="hotel" className="hotel__photo hotel__photo--small"></img>
              </div>
          </div>
          <div className="hotel__rightBox">
            <p><b>Adress:</b> {item.location.address}, {item.location.city}</p>
            <p><b>Check in:</b> {item.checkIn.from} - {item.checkIn.to}</p>
            <p><b>Check out:</b> {item.checkOut.from} - {item.checkOut.to}</p>
            <p><FontAwesomeIcon icon={faPhone} className="hotel_rightBox--content"/> {item.contact.phoneNumber}</p>
            <p><FontAwesomeIcon icon={faMailBulk} className="hotel_rightBox--content" /> {item.contact.email}</p>
          </div>
        </div>
      </div>
    </div>;
}

export default Hotel;
