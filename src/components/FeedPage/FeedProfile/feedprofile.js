import React, {useEffect, useState} from "react";
import "./feedprofile.css";
import {useNavigate} from "react-router-dom";
import {getPresentUser} from "../../../services/profileService";

const NewFeedProfile = () => {
    const [presentUser, setPresentUser] = useState(null);
    const navigate = useNavigate();

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
        navigate("/edit-profile")
    }
    return(
        <>
            {presentUser != null &&
            <div className="row mt-auto ">
                <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6 mt-80">
                    <div className="card bg-white">
                        <div className="w-100">
                            <img
                                src={presentUser["profileImage"]}
                                alt="" className="rounded-circle wap-profile-image"/></div>
                        <div className="text-center ">
                            <p className="name">{presentUser["firstName"]} {presentUser["lastName"]}</p>
                            <p className="job">{presentUser["userRole"]}</p>
                            <p>
                                <i className="fa fa-envelope fa-fw w3-margin-right w3-text-theme"></i> {presentUser["email"]} <br/>
                            <i className="fa fa-phone fa-fw w3-margin-right w3-text-theme"></i> {presentUser["phoneNumber"]}
                            <i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme ms-2"></i> {new Date(presentUser["dateOfBirth"].toString()).getMonth()}/{new Date(presentUser["dateOfBirth"].toString()).getDate()}
                            </p>
                            <button className="btn btn-primary " onClick={() => editProfile()}>Edit Profile</button>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    );
}
export default NewFeedProfile;