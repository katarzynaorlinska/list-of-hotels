import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import List from "./components/List";
import Hotel from "./components/Hotel";
import Error from "./components/Error";
import Loading from "./components/Loading";

import "./App.css";
import useFetchApi from "./hooks/useFetchApi";

function App() {
  const { error, isLoading, items } = useFetchApi(
    "https://services.lastminute.com/mobile/stubs/hotels"
  );

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
