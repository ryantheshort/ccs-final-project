import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate, NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import Cookies from 'js-cookie';
import { handleError } from "../../utils/helpers";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io5";
import FCbar from "../Images/FCbar.png";

function Navbar(props) {
    const { userDetails, setUserDetails } = props;
    // const [sidebar, setSidebar] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();
  
    // Toggles the navigation menu
    // const showSidebar = () => setSidebar(!sidebar);
  
    // Locks scrolling when the navigation menu is active


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
            <NavLink variant="primary" className="menu-bars" onClick={handleShow}>
              <FaIcons.FaBars />
            </NavLink>
          </div>
        </div>
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title> <img className="fcbar" src={FCbar} alt="logo-pic" />
        </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className="nav-menu-items">
          
            <NavLink to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </NavLink>
            <h2 className="username">{userDetails && userDetails.username}</h2>
          <IconContext.Provider value={{ color: "#1e1e1e" }}>

            {userDetails?.isAuth ? (
              <>
            <li className="nav-text" >
              <NavLink to="/scorecard" className="active" exact="true">
                
                <span>Start Scorecard</span>
              </NavLink>
            </li>
                <li className="nav-text" >
                  <NavLink to="/history" className="active" exact="true">
                    <FaIcons.FaHistory />
                    <span>Game History</span>
                  </NavLink>
                </li>
              
                <li className="nav-text">
                  <NavLink
                    to="/"
                    exact="true"
                    className="logout-btn"
                    onClick={() => {
                      // showSidebar();
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
          </Offcanvas.Body>
        </Offcanvas>
        </>
    );
};

export default Navbar;