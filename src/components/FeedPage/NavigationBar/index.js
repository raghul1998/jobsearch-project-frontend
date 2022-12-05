import React from "react";
import './index.css';
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
const NavigationBar = () => {
    const navigate = useNavigate();

    const logoutUser = () => {
        localStorage.setItem('userId', '');
        localStorage.setItem('userRole', '');
        localStorage.setItem('userImage', '');
        localStorage.setItem('userProfile', '');
        localStorage.setItem('eventIdForEventPage', '');
        localStorage.setItem('imageUrl','');
        localStorage.setItem('userName', '');
        navigate("/");
    }
    return(
        <>
            <div className="w3-top ">
                <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
                    <a className="w3-bar-item w3-hide-medium w3-hide-large w3-right w3-padding-large w3-large w3-theme-d2" href="javascript:void(0);">
                        <i className="fa fa-bars"/>
                    </a>
                    <Link to="/feedpage" className="w3-bar-item w3-padding-large w3-theme-d4 remove-underline">
                        <i className="fa fa-home w3-margin-right"></i> WhatsAppening
                    </Link>
                    {/*<img src="https://github.com/Sanjana-Nalawade/repoForAssetsOfProject/blob/main/logo.png?raw=true" width="15%" height="10%"/>*/}
                    {/*<a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"*/}
                    {/*   title="News"><i className="fa fa-globe"></i></a>*/}
                    {/*<a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"*/}
                    {/*   title="Account Settings"><i className="fa fa-user"></i></a>*/}
                    {/*<a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"*/}
                    {/*   title="Messages"><i className="fa fa-envelope"></i></a>*/}
                    {/*<div className="w3-dropdown-hover w3-hide-small">*/}
                    {/*    <button className="w3-button w3-padding-large" title="Notifications"><i*/}
                    {/*        className="fa fa-bell"></i><span className="w3-badge w3-right w3-small w3-green">3</span>*/}
                    {/*    </button>*/}
                    {/*    <div className="w3-dropdown-content w3-card-4 w3-bar-block">*/}
                    {/*        <a href="#" className="w3-bar-item w3-button">One new friend request</a>*/}
                    {/*        <a href="#" className="w3-bar-item w3-button">John Doe posted on your wall</a>*/}
                    {/*        <a href="#" className="w3-bar-item w3-button">Jane likes your post</a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<a href="#" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white"*/}
                    {/*   title="My Account">*/}
                    {/*    <img src="https://cdn2.vectorstock.com/i/1000x1000/41/11/flat-business-woman-user-profile-avatar-icon-vector-4334111.jpg" height="30px" width="30px" className="w3-circle"*/}
                    {/*         alt="Avatar"/>*/}
                    {/*</a>*/}
                    <button onClick={() => logoutUser()} className="btn btn-primary w3-right pt-3">
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
}
export default NavigationBar;