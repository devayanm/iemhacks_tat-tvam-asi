import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import logo from '../../img/logo.png'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to="/"><img src={logo} alt="Logo" /></Link>
            </div>
            <ul className="navbar__items">
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link className="link" to="/self-assessment">Self Assessment</Link></li>
                <li><Link className="link" to="/contact">Helpline</Link></li>
                <li><Link className="link" to="/resource">Resource</Link></li>
                <li><Link className="link" to="/community">Chat</Link></li>
            </ul>
            <div className="navbar__buttons">
                <Link to="/join-us"><button className="joinButton">Join Us</button></Link>
                <Link className="link" to="/sign-in-up"><button className="signinButton">Sign in / Sign up</button></Link>
            </div>
        </nav>
    );
}

export default Navbar;
