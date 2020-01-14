import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/************************ Pages ***************************/
import Home from "./components/pages/Home/Home";
import Saved from "./components/pages/Saved/Saved";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
/************ Components  **************/

function App() {
  const notify = (type, message) => {
    switch (type) {
      case "info":
        toast.info(message, {
          position: toast.POSITION.TOP_CENTER
        });
        break;

      case "success":
        toast.success(message, {
          position: toast.POSITION.TOP_CENTER
        });
        break;

      case "error":
        toast.error(message, {
          position: toast.POSITION.TOP_CENTER
        });
        break;

      default:
        toast.info(message, {
          position: toast.POSITION.TOP_CENTER
        });
    }
  };

  return (
    <Router>
      <div className="App">
        <div></div>
        <div className="main">
          <Switch>
            <Route exact path="/" render={() => <Home notify={notify} />} />
            <Route
              exact
              path="/saved"
              render={() => <Saved notify={notify} />}
            />
            <Route render={() => <Home notify={notify} />} />
          </Switch>
          <ToastContainer autoClose={4000} />
        </div>
        <div></div>
      </div>
    </Router>
  );
}

export default App;
