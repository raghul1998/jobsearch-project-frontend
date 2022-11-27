import React, {useEffect, useState} from "react";
import { Link, useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import moment from "moment";
import './index.css';
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
                console.log(user);
                localStorage.setItem('userId', user["_id"]);
                localStorage.setItem('userRole', user["userRole"]);
                history.push("/")
            } else {
                setSubmitting(false);
            }
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8 offset-sm-2 mt-5">
                    <div className="card m-3">
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                            {({ errors, touched, isSubmitting }) => (
                                <Form>
                                    <h3 className="card-header">Register</h3>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="form-group col-12">
                                                <label>Email</label>
                                                <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-12">
                                                <label>Password</label>
                                                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                            </div>
                                        </div>

                                        <div className="form-group pt-2">
                                            <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                                {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                                Login
                                            </button>
                                            <Link to="/register" className="btn btn-link">Register</Link>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;