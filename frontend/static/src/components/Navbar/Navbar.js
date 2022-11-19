import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useNavigate, NavLink, useParams } from "react-router-dom";
import { IconContext } from "react-icons";
import Cookies from 'js-cookie';
import { handleError } from "../../utils/helpers";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io5";
import FCbar from "../Images/FCbar.png";
import LiveHolesScorecard from "../Scorecard/LiveHolesScorecard";
import NearbyCourses from "../NearbyCourses/NearbyCourses";
import "../../styles/Navbar.css";
import Home from "../Home/Home";

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
        <Offcanvas  show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton >
        <Offcanvas.Title> <img className="fcbar" src={FCbar} alt="logo-pic" />
        </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="nav-menu-items">
            <h2 className="username">{userDetails && userDetails.username}</h2>
          <ButtonGroup vertical>
            
            <NavLink 
                className="login-canvas" 
                to="/login"
                exact="true"
                onClick={useNavigate}><Button>PLAYER LOGIN</Button>
            </NavLink>
                <NavLink 
                  to="/nearbycourses" 
                  className="nearby-courses"
                  exact="true"
                  onClick={useNavigate}><Button>NEARBY COURSES</Button>
            </NavLink>
              {userDetails?.isAuth ? (
                <>
            
                <NavLink 
                to="/scorecards/" 
                className="start-scorecard" 
                exact="true"
                type="button" onClick={useNavigate}><Button>START SCORECARD</Button>
                </NavLink>
                <NavLink 
                  to="/history" 
                  className="active" 
                  exact="true">
                  <Button>GAME HISTORY</Button>
                </NavLink>
                <NavLink
                  to="/"
                  exact="true"
                  className="logout"
                  onClick={() => {
                    // showSidebar();
                    props.appLogin("");
                    
                  }}
                  
                ><Button onClick={handleLogout}>LOGOUT</Button>
                </NavLink>
            </>   
            ) : undefined}
          </ButtonGroup>
        </div>
          </Offcanvas.Body>
        </Offcanvas>
        </>
    );
};

export default Navbar;