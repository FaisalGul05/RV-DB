import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useCollapse from "react-collapsed";
import "./NavbarCollapsed.css";
import { Spin as Hamburger } from "hamburger-react";
import SignUp_icon from "../../Svg/SignUp_icon.svg";
import { AiOutlineLogout } from 'react-icons/ai'
import { useDispatch } from "react-redux";
import { IS_SIGNEDIN } from "../../../Redux/Reducers/AuthReducer";

function NavbarCollapsed() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLogedIn = localStorage.getItem('loginState')

  const handleLogout = () => {
    console.log("Logout")
    dispatch({ type: IS_SIGNEDIN, payload: false });
    localStorage.removeItem("loginState");
    navigate('/')
  }

  const { getCollapseProps, getToggleProps } = useCollapse();
  return (
    <div className="collapsedFilter-container collapsed-container">
      <div className="hamBtn-container">
        <h1 className="logo"><Link to={'/'}>ASKRVDB</Link></h1>
        <div className="hamBurger" {...getToggleProps()}>
          <Hamburger className="hamBtn" />
        </div>
      </div>
      <div className="NavbarCollapsed" {...getCollapseProps()}>
        <ul className="nav-listCollapsed">
          <li className="linksCollapsed">
            <NavLink
              to="/"
              className="nav-linkCollapsed"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li className="linksCollapsed">
            <NavLink
              to="/about"
              className="nav-linkCollapsed"
              activeClassName="active"
            >
              About Us
            </NavLink>
          </li>
          <li className="linksCollapsed">
            <NavLink
              to="/reviews"
              className="nav-linkCollapsed"
              activeClassName="active"
            >
              My Reviews
            </NavLink>
          </li>
          <li className="linksCollapsed-bottom">
            {isLogedIn ? <AiOutlineLogout className="LogoutBtn" size={35} onClick={handleLogout} /> : <Link to={'/reviews'}><img src={SignUp_icon} alt="icon" className="SignUp-icon" /></Link>}

            {/* <button type="button" className="navBtn">
              <NavLink to="/" className="btn-link">
                CONTACT
              </NavLink>
            </button> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarCollapsed;
