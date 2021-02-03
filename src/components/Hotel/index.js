import { useParams } from "react-router-dom";

import "./hotel.css";

function Hotel(props) {
  const { id } = useParams();

  const item = props.items.find((element) => id === element.id.toString());

  return <div>{item?.name ?? "No hotel"}</div>;
}

export default Hotel;
