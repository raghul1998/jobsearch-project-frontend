import React, {useEffect, useState} from "react";
import {getPresentUser} from "../../../services/profileService";
import './index.css';
import {useHistory} from "react-router-dom";

const FeedProfile = () => {
    const [presentUser, setPresentUser] = useState(null);
    const history = useHistory();

    useEffect(() => {
        let userId = localStorage.getItem('userId').toString();
        getPresentUser(userId).then((user) => {
            setPresentUser(user);
            localStorage.setItem('userProfile', JSON.stringify(user));
        }).catch((error) => {
            setPresentUser(null);
        });
    }, [])

    const editProfile = () => {
      history.push("/edit-profile");
    }

    return(
    <>
        {presentUser != null &&
        <div className="col-12 m3 ms-2">
            <div className="w3-card w3-round w3-white">
                <div className="w3-container">
                    <h4 className="w3-center">{presentUser["firstName"]} {presentUser["lastName"]}</h4>
                    <p className="w3-center">
                        <img src={presentUser["profileImage"]}
                             className="w3-circle"
                             height="106px" width="106px" alt="Avatar"/>
                    </p>
                    <hr/>
                    <p><i className="fa fa-envelope fa-fw w3-margin-right w3-text-theme"></i> {presentUser["email"]}
                    </p>
                    <p><i className="fa fa-phone fa-fw w3-margin-right w3-text-theme"></i> {presentUser["phoneNumber"]}
                    </p>
                    <p><i
                        className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i> {new Date(presentUser["dateOfBirth"].toString()).getMonth()}/{new Date(presentUser["dateOfBirth"].toString()).getDate()}
                    </p>
                    <p className="edit-profile" onClick={() => editProfile()}>Edit Profile</p>
                </div>
            </div>
            <br/>

            {/*<div className="w3-card w3-round">*/}
            {/*    <div className="w3-white">*/}
                    {/*<button onClick="myFunction('Demo1')" className="w3-button w3-block w3-theme-l1 w3-left-align">*/}
                    {/*    <i className="fa fa-circle-o-notch fa-fw w3-margin-right"></i> My Groups*/}
                    {/*</button>*/}
                    {/*<div id="Demo1" className="w3-hide w3-container">*/}
                    {/*    <p>Some text..</p>*/}
                    {/*</div>*/}


                    {/*<button onClick="myFunction('Demo2')" className="w3-button w3-block w3-theme-l1 w3-left-align">*/}
                    {/*    <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i> My Events*/}
                    {/*</button>*/}
                    {/*<div id="Demo2" className="w3-hide w3-container">*/}
                    {/*    <p>Some other text..</p>*/}
                    {/*</div>*/}
                    {/*<button onClick="myFunction('Demo3')" className="w3-button w3-block w3-theme-l1 w3-left-align">*/}
                    {/*    <i className="fa fa-users fa-fw w3-margin-right"></i> My Photos*/}
                    {/*</button>*/}


                    {/*<div id="Demo3" className="w3-hide w3-container">*/}
                    {/*    <div className="w3-row-padding">*/}
                    {/*        <br/>*/}
                    {/*        <div className="w3-half">*/}
                    {/*            <img src="/w3images/lights.jpg" width="100%" className="w3-margin-bottom"/>*/}
                    {/*        </div>*/}
                    {/*        <div className="w3-half">*/}
                    {/*            <img src="/w3images/nature.jpg" width="100%" className="w3-margin-bottom"/>*/}
                    {/*        </div>*/}
                    {/*        <div className="w3-half">*/}
                    {/*            <img src="/w3images/mountains.jpg" width="100%" className="w3-margin-bottom"/>*/}
                    {/*        </div>*/}
                    {/*        <div className="w3-half">*/}
                    {/*            <img src="/w3images/forest.jpg" width="100%" className="w3-margin-bottom"/>*/}
                    {/*        </div>*/}
                    {/*        <div className="w3-half">*/}
                    {/*            <img src="/w3images/nature.jpg" width="100%" className="w3-margin-bottom"/>*/}
                    {/*        </div>*/}
                    {/*        <div className="w3-half">*/}
                    {/*            <img src="/w3images/snow.jpg" width="100%" className="w3-margin-bottom"/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
            {/*    </div>*/}
            {/*</div>*/}


        </div>
        }
    </>
    );
}
export default FeedProfile;