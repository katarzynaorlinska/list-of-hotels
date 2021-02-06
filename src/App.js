import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import List from "./components/List";
import Hotel from "./components/Hotel";
import Error from "./components/Error";
import Loading from "./components/Loading";

import "./App.css";

function App() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://services.lastminute.com/mobile/stubs/hotels")
      .then((res) => res.json())
      .then(
        (res) => {
          setIsLoading(false);
          setItems(res.hotels);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <Error message={error.message} />;
  } else if (isLoading) {
    return <Loading />;
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
