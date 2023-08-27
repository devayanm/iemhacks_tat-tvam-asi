import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import logo from '../../img/logo.png'

function Navbar() {
    const [navbarActive, setNavbarActive] = useState(false);

    const toggleNavbar = () => {
        setNavbarActive(!navbarActive);
    };

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to="/"><img src={logo} alt="Logo" /></Link>
            </div>
            <ul className={`navbar__items ${navbarActive ? "active" : ""}`}>
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link className="link" to="/self-assessment">Self Assessment</Link></li>
                <li><Link className="link" to="/events">Events</Link></li>
                <li><Link className="link" to="/contact">Helpline</Link></li>
                <li><Link className="link" to="/community">Forum</Link></li>
            </ul>
            <div className="navbar__buttons">
                <Link to="/join-us"><button className="joinButton">Join Us</button></Link>
                <Link className="link" to="/sign-in-up"><button className="signinButton">Sign in / Sign up</button></Link>
            </div>
            <div className="hamburger-icon" onClick={toggleNavbar}>&#9776;</div>
        </nav>
    );
}

export default Navbar;
