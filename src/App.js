import { useEffect, useState } from "react";

import Item from "./components/Item";
import Error from "./components/Error";
import Loaded from "./components/Loaded";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://services.lastminute.com/mobile/stubs/hotels")
      .then((res) => res.json())
      .then(
        (res) => {
          setIsLoaded(true);
          setItems(res.hotels);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <Error message={error.message} />;
  } else if (!isLoaded) {
    return <Loaded />;
  } else {
    return (
      <ul>
        {items.map((item) => (
          <Item id={item.id} name={item.name} cite={item.city} />
        ))}
      </ul>
    );
  }
}

export default App;
