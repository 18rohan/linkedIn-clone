import "./App.css";
import React from "react";

// Import Components
import Login from "./components/login.page";
import Home from "./components/home.page";
import SignupPage from "./components/Signup.page.js";
import Header from "./components/header.component";

// Import Packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // useEffects(() => {
  //   dispatch(getUserAuth());
  // });
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Header />
            <Home />
          </Route>
          <Route exact path="/signin">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
