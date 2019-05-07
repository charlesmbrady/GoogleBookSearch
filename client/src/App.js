import React, { Component } from "react";
import { BrowserRouter, Route} from 'react-router-dom';
import NavBar from './components/Nav/Nav';
import "./App.css";
import Home from './components/pages/Home/Home';
import Search from './components/pages/Search/Search';
import Saved from './components/pages/Saved/Saved';

class App extends Component {
  

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <NavBar />
        
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
