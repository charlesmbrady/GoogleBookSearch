import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
/************************ Pages ***************************/
import Home from './Pages/Home/Home';
import Saved from './Pages/Saved/Saved';
import './App.css';
/************ Components  **************/
import Nav from './components/Nav/Nav';

function App() {
  return (
    <Router>
     <Nav />
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
