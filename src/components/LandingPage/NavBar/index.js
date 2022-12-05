import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
    return(
        <>
            <div className=" navbar-trans w3-right w3-hide-small">
                <Link to = "/signin" className="w3-bar-item w3-button">DEMO
                </Link>
                <Link to = "/signin" className="w3-bar-item w3-button"><i className="fa fa-user"></i> SIGN IN</Link>
                <Link to = "/signup" className="w3-bar-item w3-button"><i className="fa fa-user-plus"></i> SIGN UP</Link>
                {/*<a href="#pricing" className="w3-bar-item w3-button"><i className="fa fa-usd"></i> PRICING</a>
                <a href="#contact" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i> CONTACT</a>*/}
            </div>
        </>
    );
}

export default NavBar;