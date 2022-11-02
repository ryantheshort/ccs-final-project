import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import '../../styles/App.css';
import RegisterForm from "../Auth/RegisterForm";
import LoginForm from "../Auth/LoginForm";
import Navbar from "../Navbar/Navbar";
import { useNavigate, Link } from "react-router-dom";
import { handleError } from "../../utils/helpers";

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function App() {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const updateUserDetails = () => {
     if(Cookies.get('Authorization')) {
      setUserDetails({
        isAuth: true, 
        username: localStorage.getItem('username'),
      });
     } else {
      setUserDetails({
        isAuth: false,
        username: null,
      });
     }
    }

    updateUserDetails();


  }, []);

//   const appLogin =  async (passUsername, rememberMe) => {
//     setUsername(passUsername);
//     const options = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "X-CSRFToken": Cookies.get("csrftoken"),
//       },
//     };
//     if (passUsername && rememberMe) {
//       // Username is set in local storage if rememberMe is True.
//       localStorage.setItem("username", passUsername);
//     }
//     // When logout button is pressed, remove the item from localStorage and sessionStorage
//     if (!passUsername) {
//       localStorage.removeItem("username");
//       sessionStorage.clear();
//     }
  

//   const response = await fetch("/dj-rest-auth/logout/", options).catch(handleError);
//   if (!response.ok) {
//     throw new Error("Network response was not OK");
//   }
//   data = await response.json();
//     Cookies.set("Authorization", `Token ${data.key}`);
//     window.localStorage.removeItem("userState");
//     setUserState(INITIAL_STATE);
//   };
// };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar userDetails={userDetails} setUserDetails={setUserDetails} />
        <Routes>
          <Route
          path="login"
          element={<LoginForm setUserDetails={setUserDetails} />}
          />
          <Route
          path="register"
          element={<RegisterForm setUserDetails={setUserDetails} />}
          />
          {/* <Route path="/account" exact component={Account} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
  
  
}

export default App;
