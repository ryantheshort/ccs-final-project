import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import '../../styles/App.css';
import RegisterForm from "../LoginAndRegister/RegisterForm";
import LoginForm from "../LoginAndRegister/LoginForm";

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

  const response = await fetch("/dj-rest-auth/logout/", options).catch(handleError);
  if (!response.ok) {
    throw new Error("Network response was not OK");
  } else {
    Cookies.remove("Authorization");
    window.localStorage.removeItem("userState");
    setUserState(INITIAL_STATE);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar username={username} appLogin={appLogin} />
        <Routes>
          <Route
          path="login"
          element={<LoginForm userState={userState} setUserState={setUserState} />}
          />
          <Route
          path="register"
          element={<RegisterForm userState={userState} setUserState={setUserState} />}
          />
          {/* <Route path="/account" exact component={Account} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
  
  
}

export default App;
