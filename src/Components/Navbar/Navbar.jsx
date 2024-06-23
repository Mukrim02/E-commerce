import React from "react";
import "./Navbar.css";
import navlogo from  '../../assets/nav-logo.svg';
import navProfile from "../../assets/nav-profile.svg";

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={navlogo} alt="Logo" className="navbar-logo" />
            <img src={navProfile} alt="Profile" className="navbar-profile" />
        </nav>
    );
};

export default Navbar;
