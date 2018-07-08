import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Nav from "./components/Nav";


const App = () => (
    <Router>
        <div>
            <Nav />

            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Profile" component={Profile} />
                <Route exact path="/Search" component={Search} />
            </Switch>
        </div>
    </Router>
);

export default App;