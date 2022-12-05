import React, { Component, useState } from "react";
import './index.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reenterPassword, setReenterPassword] = useState('');

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8 offset-sm-2 mt-5">
                    <div className="card m-3">
                        <form>
                            <h3 className="card-header pt-2 ps-2">Forgot Password</h3>

                            <div className="form-group ps-2 pe-2 pt-3">
                                <label>Email address</label>
                                <input type="email" value={email} className="form-control" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                            </div>

                            <div className="pt-2 ps-2 pt-3">
                                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                                <a className="ps-2" href="/login">Cancel</a>
                            </div>
                            <div className="pt-3"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;