import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/************************ Pages ***************************/
import Home from "./components/pages/Home/Home";
import Saved from "./components/pages/Saved/Saved";
import "./App.css";
/************ Components  **************/

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
