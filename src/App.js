import { useEffect, useState } from "react";

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
      )
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Ładowanie...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} {item.city}
          </li>
        ))}
      </ul>
    );
  }
}

export default App;
