import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
import './App.css';

function App() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const usernameLocal = () => {
      if (localStorage.getItem("username")) {
        usernameSet(localStorage.getItem("username"));
      }
    };
    usernameLocal();
  }, []);

  const appLogin = (passUsername, rememberMe) => {
    setUsername(passUsername);
    if (passUsername && rememberMe) {
      // Username is set in local storage if rememberMe is True.
      localStorage.setItem("username", passUsername);
    }
    // When logout button is pressed, remove the item from localStorage and sessionStorage
    if (!passUsername) {
      localStorage.removeItem("username");
      sessionStorage.clear();
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Form username={username} appLogin={appLogin} />
        <Switch>
          <Route
          />
          {/* <Route path="/account" exact component={Account} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
  
  
}

export default App;
