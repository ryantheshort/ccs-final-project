import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import Cookies from 'js-cookie';
import { handleError } from "../../utils/helpers";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io5";

function Navbar(props) {
    const { userDetails, setUserDetails } = props;
    const [sidebar, setSidebar] = useState(false);
    const navigate = useNavigate();
  
    // Toggles the navigation menu
    const showSidebar = () => setSidebar(!sidebar);
  
    // Locks scrolling when the navigation menu is active
    sidebar
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = null);





      const handleLogout = async (e) => {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": Cookies.get("csrftoken"),
          },
        };
        
        const response = await fetch("/dj-rest-auth/logout/", options).catch(handleError);
        if (!response.ok) {
          throw new Error("Network response was not OK");
        } else {
          const data = await response.json();
          Cookies.remove("Authorization");
          localStorage.removeItem('username');
          navigate("/login/")
          setUserDetails({
            isAuth: false,
            username: null
          });
         
        }
    
      };

    return (
        <>
        <div className="banner">
          <div className="navbar">
            <NavLink to="#" className="menu-bars" onClick={showSidebar}>
              <FaIcons.FaBars />
            </NavLink>
            <h2 className="main-title" onClick={showSidebar}>
              Feature Card
            </h2>
          </div>
        </div>
        {sidebar ? (
        <div className="nav-shade" onClick={showSidebar}></div>
      ) : undefined}
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <NavLink to="#" className="menu-bars" onClick={showSidebar}>
              <AiIcons.AiOutlineClose />
            </NavLink>
            <img
              className="nav-logo"
              src={`${process.env.PUBLIC_URL}`}
              alt="Website Logo"
            // Feature Card Logo above
            />
            <h2 className="username">{userDetails && userDetails.username}</h2>
          </li>
          <IconContext.Provider value={{ color: "#1e1e1e" }}>
            <li className="nav-text" onClick={showSidebar}>
              <NavLink to="/" activeClassName="active" exact={true}>
                
                <span>Start Scorecard</span>
              </NavLink>
            </li>
            {userDetails?.isAuth ? (
              <>
                <li className="nav-text" onClick={showSidebar}>
                  <NavLink to="/history" activeClassName="active" exact={true}>
                    <FaIcons.FaHistory />
                    <span>Game History</span>
                  </NavLink>
                </li>
                {/* <li className="nav-text" onClick={showSidebar}>
                  <NavLink to="/account" activeClassName="active" exact={true}>
                    <MdIcons.MdAccountCircle />
                    <span>Account</span>
                  </NavLink>
                </li> */}
                <li className="nav-text">
                  <NavLink
                    to="/"
                    exact={true}
                    className="logout-btn"
                    onClick={() => {
                      showSidebar();
                      props.appLogin("");
                    }}
                  >
                    <IconContext.Provider value={{ color: "#B10000" }}>
                      <IoIcons.IoPowerOutline />
                    </IconContext.Provider>
                    <button type="button" onClick={handleLogout}>Logout</button>
                  </NavLink>
                </li>
              </>
            ) : undefined}
          </IconContext.Provider>
        </ul>
        </nav>
        </>
    );
};

export default Navbar;