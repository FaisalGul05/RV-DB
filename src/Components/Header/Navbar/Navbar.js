import React from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import "../../../Assets/Fonts/Fonts.css";
import SignUp_icon from "../../Svg/SignUp_icon.svg";
import { useDispatch } from "react-redux";
import { IS_SIGNEDIN } from "../../../Redux/Reducers/AuthReducer";
import { AiOutlineLogout } from 'react-icons/ai'
import { useEffect } from "react";

function Navbar1() {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const isLogedIn = localStorage.getItem('loginState')
  
  // console.log(isLogedIn)
  const handleLogout = () => {
    console.log("Logout")
    dispatch({ type: IS_SIGNEDIN, payload: false });
    localStorage.removeItem("loginState");
    navigate('/')
  }


  return (
    <>
      <header>
        <div className="navbar2">
          <div className="nav2-left">
            <ul className="nav-list">
              <li className="links">
                <NavLink
                  to="/"
                  className="nav-link"
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
              <li className="links">
                <NavLink
                  to="/about"
                  className="nav-link"
                  activeClassName="active"
                  
                >
                  About Us
                </NavLink>
              </li>

              <li className="links">
                <NavLink
                  to="/reviews"
                  className="nav-link"
                  activeClassName="active"
                >
                  My Reviews
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav2-center">
            <h1 className="logo"><Link to={'/'}>ASKRVDB</Link></h1>
          </div>
          <div className="nav2-right">
            {isLogedIn ? <AiOutlineLogout className="LogoutBtn" size={35} onClick={handleLogout} /> : <Link to={'/reviews'}><img src={SignUp_icon} alt="icon" className="SignUp-icon" /></Link>}

            {/* <li className="btn-li">
              <button type="button" className="navBtn">
                <NavLink to="" className="btn-link">
                  CONTACT
                </NavLink>
              </button>
            </li> */}
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar1;
