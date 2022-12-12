import React from "react";
import './index.css';
import {Link,useNavigate} from "react-router-dom";
const NavigationBar = () => {
    const history = useNavigate();

    const logoutUser = () => {
        localStorage.setItem('userId', '');
        localStorage.setItem('userRole', '');
        localStorage.setItem('userImage', '');
        localStorage.setItem('userProfile', '');
        localStorage.setItem('eventIdForEventPage', '');
        localStorage.setItem('imageUrl','');
        localStorage.setItem('userName', '');
        history("/");
    }
    return(
        <>
            <div className="w3-top ">
                <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
                    <a className="w3-bar-item w3-hide-medium w3-hide-large w3-right w3-padding-large w3-large w3-theme-d2" href="javascript:void(0);">
                        <i className="fa fa-bars"/>
                    </a>
                    <Link to="/dashboard" className="w3-bar-item w3-padding-large w3-theme-d4 remove-underline">
                        <i className="fa fa-home w3-margin-right"></i> Career Genie
                    </Link>
                    <button onClick={() => logoutUser()} className="btn btn-primary w3-right mt-2 me-2">
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
}
export default NavigationBar;