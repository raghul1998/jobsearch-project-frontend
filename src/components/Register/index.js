import React, {useEffect, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import moment from "moment";
import './index.css';

import {createUser} from '../../services/profileService';
import { alertService } from '../../services/alertService';

const profileImages = require('../../constants/defaultProfileImages.json');

const Register = () => {
    let navigate = useNavigate();

    const initialValues = {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        email: '',
        password: '',
        confirmPassword: '',
        userRole: '',
        agreeToPrivacyPolicy: false,
        phoneNumber: '',
        gender: '',
        currentGraduateLevel: '',
        profileImage: ''
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('First Name is required'),
        lastName: Yup.string()
            .required('Last Name is required'),
        dateOfBirth: Yup.string()
            .required('DOB is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        userRole: Yup.string()
            .required('User role is required'),
        agreeToPrivacyPolicy: Yup.bool()
            .oneOf([true], 'Accepting Terms & Conditions is required'),
        phoneNumber: Yup.number()
            .required('Phone number is required'),
        gender: Yup.string()
            .required('Gender is required'),
        currentGraduateLevel: Yup.string()
            .required('Current grad level is required'),
    });

    function onSubmit(fields, { setStatus, setSubmitting }) {
        setStatus();

        let defaultProfileImage = "";
        if (fields["gender"].toString().toLowerCase() === "male") {
            defaultProfileImage = profileImages[0]["image"];
        } else if (fields["gender"].toString().toLowerCase() === "female") {
            defaultProfileImage = profileImages[1]["image"];
        }

        let currentUserRole = "";
        if (fields["userRole"].toString().toLowerCase() === "organise and student") {
            currentUserRole = "both";
        } else {
            currentUserRole = fields["userRole"].toString().toLowerCase();
        }

        const newUser = {
            "firstName": fields["firstName"],
            "lastName": fields["lastName"],
            "dateOfBirth": fields["dateOfBirth"],
            "email": fields["email"],
            "password": fields["password"],
            "profileImage": defaultProfileImage,
            "phoneNumber": fields["phoneNumber"],
            "gender": fields["gender"].toString().toLowerCase(),
            "currentGradLevel": fields["currentGraduateLevel"].toString().toLowerCase(),
            "userRole": currentUserRole
        }

        console.log(newUser);

        createUser(newUser)
            .then(() => {
                alertService.success('Registration successful', { keepAfterRouteChange: true });
                navigate('/login');
            })
            .catch(error => {
                setSubmitting(false);
                alertService.error(error);
            });
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

                                            <div className="form-group col-6">
                                                <label>First Name</label>
                                                <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                                <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                                            </div>

                                            <div className="form-group col-6">
                                                <label>Last Name</label>
                                                <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                                                <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label>Email</label>
                                                <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                            </div>


                                            <div className="form-group col-6">
                                                <label>Date of Birth</label>
                                                <Field name="dateOfBirth" type="date" className={'form-control' + (errors.dateOfBirth && touched.dateOfBirth ? ' is-invalid' : '')} />
                                                <ErrorMessage name="dateOfBirth" component="div" className="invalid-feedback" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label>Password</label>
                                                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                            </div>
                                            <div className="form-group col-6">
                                                <label>Confirm Password</label>
                                                <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                                                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-4">
                                                <label>User Role</label>
                                                <Field name="userRole" as="select" className={'form-control' + (errors.userRole && touched.userRole ? ' is-invalid' : '')}>
                                                    <option value=""></option>
                                                    <option value="Organiser">Organiser</option>
                                                    <option value="Student">Student</option>
                                                    <option value="Organise and Student">Organiser and Student</option>
                                                </Field>
                                                <ErrorMessage name="userRole" component="div" className="invalid-feedback" />
                                            </div>

                                            <div className="form-group col-4">
                                                <label>Gender</label>
                                                <Field name="gender" as="select" className={'form-control' + (errors.gender && touched.gender ? ' is-invalid' : '')}>
                                                    <option value=""></option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </Field>
                                                <ErrorMessage name="gender" component="div" className="invalid-feedback" />
                                            </div>

                                            <div className="form-group col-4">
                                                <label>Current graduate level</label>
                                                <Field name="currentGraduateLevel" as="select" className={'form-control' + (errors.currentGraduateLevel && touched.currentGraduateLevel ? ' is-invalid' : '')}>
                                                    <option value=""></option>
                                                    <option value="Graduate">Graduate</option>
                                                    <option value="Undergraduate">Undergraduate</option>
                                                </Field>
                                                <ErrorMessage name="currentGraduateLevel" component="div" className="invalid-feedback" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label>Phone Number</label>
                                                <Field name="phoneNumber" type="number" className={'form-control' + (errors.phoneNumber && touched.phoneNumber ? ' is-invalid' : '')} />
                                                <ErrorMessage name="phoneNumber" component="div" className="invalid-feedback" />
                                            </div>
                                        </div>

                                        <div className="form-group form-check pt-2">
                                            <Field type="checkbox" name="agreeToPrivacyPolicy" id="agreeToPrivacyPolicy" className={'form-check-input ' + (errors.agreeToPrivacyPolicy && touched.agreeToPrivacyPolicy ? ' is-invalid' : '')} />
                                            <label htmlFor="agreeToPrivacyPolicy" className="form-check-label">Accept Terms & Conditions</label>
                                            <ErrorMessage name="agreeToPrivacyPolicy" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                                {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                                Register
                                            </button>
                                            <Link to="/login" className="btn btn-link">Cancel</Link>
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

export default Register;
