import React, {useEffect, useState} from "react";
import { Link, useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import moment from "moment";
import './style.css';
import {loginUser   } from '../../services/profileService';
import { alertService } from '../../services/alertService';

const profileImages = require('../../constants/defaultProfileImages.json');

const Login = () => {
    let history = useHistory();
    localStorage.setItem('userId', '');
    localStorage.setItem('userRole', '');

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });

    function onSubmit(fields, { setStatus, setSubmitting }) {
        setStatus();
        loginUser(fields["email"],fields["password"]).then((user) => {
            if (user != null) {
                localStorage.setItem('userId', user["_id"]);
                localStorage.setItem('userRole', user["userRole"]);
                localStorage.setItem('userName', user["firstName"] + " " + user["lastName"]);
                localStorage.setItem('userImage', user['profileImage']);
                history.push("/feedpage")
            } else {
                setSubmitting(false);
            }
        })
    }

    return(
        <>

            <section className="sign-in">
                <div className="container">
                    <div className="signin-content">
                        <div className="signin-image">
                            <figure><img src="https://github.com/Sanjana-Nalawade/repoForAssetsOfProject/blob/main/signin-image.jpg?raw=true" alt="sing up image"/></figure>
                            <div className="ps-5">
                                <Link to="/signup" > CREATE AN ACCOUNT</Link>
                            </div>

                        </div>

                        <div className="signin-form">
                            <h2 className="form-title">Sign In</h2>
                            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                                {({ errors, touched, isSubmitting }) => (
                                <Form>
                                <div className="form-group">
                                    <label htmlFor="email"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <Field type="email" name="email" placeholder="Email"  className={'' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password"><i className="zmdi zmdi-lock"></i></label>
                                    <Field name="password" id="password"  placeholder="Password" type="password" className={'' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" name="remember-me" id="remember-me" className="agree-term"/>
                                    <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember
                                        me</label>
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signin" id="signin"  disabled={isSubmitting} className="form-submit btn btn-primary"
                                           value="Log in"/>
                                </div>
                                </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Login;