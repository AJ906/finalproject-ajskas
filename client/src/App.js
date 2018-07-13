import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
// import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Search" component={Search} />

        {/*<Route component={NoMatch} />*/}
      </Switch>
    </div>
  </Router>
);

export default App;
