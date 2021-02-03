import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import List from "./components/List";
import Hotel from "./components/Hotel";
import Error from "./components/Error";
import Loaded from "./components/Loaded";

import "./App.css";

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
      <Router>
        <Switch>
          <Route path="/hotel/:id">
            <Hotel items={items} />
          </Route>
          <Route path="/">
            <List items={items} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
