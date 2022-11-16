import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import '../../styles/App.css';
import RegisterForm from "../Auth/RegisterForm";
import LoginForm from "../Auth/LoginForm";
import NavLink from "../Navbar/Navbar";
import { handleError } from "../../utils/helpers";
import Home from "../Home/Home";
import NewScorecard from "../Scorecard/NewScorecard";
import '../../styles/LiveHolesScorecard.css';
import NearbyCourses from "../NearbyCourses/NearbyCourses";
import LiveHolesScorecard from "../Scorecard/LiveHolesScorecard";
import LiveScorecard from "../Scorecard/LiveScorecard";

function App() {
  const [userDetails, setUserDetails] = useState(null);

  const {hole, scorecards} = useParams();
  
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
    <div className="App">
      <BrowserRouter>
      
        <NavLink userDetails={userDetails} setUserDetails={setUserDetails} />
          <Routes>
            <Route index element={<Home />} />
            <Route
            path="login"
            element={<LoginForm setUserDetails={setUserDetails} />}
            />
            <Route
            path="register"
            element={<RegisterForm setUserDetails={setUserDetails} />}
            />
            
            <Route path="scorecards/" element={<NewScorecard userDetails={userDetails} setUserDetails={setUserDetails} />} ></Route>
            <Route path="scorecards:scorecard/hole/:hole" element={<LiveHolesScorecard userDetails={userDetails} setUserDetails={setUserDetails} />} />
            <Route path="scorecards:scorecard" element={<LiveScorecard userDetails={userDetails} setUserDetails={setUserDetails}/>} />
            
            <Route
            path="nearbycourses"
            element={<NearbyCourses userDetails={userDetails}/>}
            />
          </Routes>
    </BrowserRouter>
    </div>
  );
  
  
}

export default App;
