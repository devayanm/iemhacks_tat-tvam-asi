import React from "react";
import "./Footer.css";
import logo from '../../img/logo.png'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="logo-container">
                    <Link to="/"><img src={logo} alt="Logo" /></Link>
                </div>
                <div className="info-container">
                    <p>Our website is dedicated to providing resources, support, and information on mental health and suicide prevention. From crisis hotlines to self-care tips, we're here to help you take the first step towards healing and recovery.</p>
                </div>
                <div className="made-with-love">
                    Made with ❤️ by EmpathConnect
                </div>
            </div>
        </footer>
    );
}

export default Footer;
