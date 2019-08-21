<<<<<<< HEAD
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
=======
import React, { Component } from "react";
import { BrowserRouter, Route} from 'react-router-dom';
import "./App.css";
import Home from './components/pages/Home/Home';
import Search from './components/pages/Search/Search';
import Saved from './components/pages/Saved/Saved';
>>>>>>> 3ff8e3c7c14c6759853c3b01d4492814d4a067e0

function App() {
  return (
    <Router>
     <Nav />
      <div className="App">
<<<<<<< HEAD
        <Switch>
=======
        
>>>>>>> 3ff8e3c7c14c6759853c3b01d4492814d4a067e0
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
