import React from "react";
import "./signupStyle.css";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Link, useNavigate} from "react-router-dom";
import profileImages from "../../constants/defaultProfileImages.json";
import {createUser} from "../../services/profileService";
import {alertService} from "../../services/alertService";


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
            defaultProfileImage = "https://whatsappening.s3.us-east-2.amazonaws.com/male_default_profile_image.jpeg";
        } else if (fields["gender"].toString().toLowerCase() === "female") {
            defaultProfileImage = "https://whatsappening.s3.us-east-2.amazonaws.com/female_default_profile_image.webp";
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
                navigate('/signin');
            })
            .catch(error => {
                setSubmitting(false);
                alertService.error(error);
            });
    }

    return (
        <>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({errors, touched, isSubmitting }) => (
                    <section className="signup">
                        <div className="container">
                            <div className="signup-content">
                                <div className="signup-form">
                                    <h2 className="form-title">Sign up</h2>
                                    <Form method="POST" className="register-form" id="register-form">
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-6">
                                                    <label htmlFor="FirstName">
                                                        <i className="zmdi zmdi-account material-icons-name"></i>
                                                    </label>
                                                    <Field className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} type="text" name="firstName" id="FirstName" placeholder="First Name"/>
                                                    <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                                                </div>
                                                <div className="col-6">
                                                    <label htmlFor="LastName">
                                                        <i className="zmdi zmdi-account material-icons-name"></i>
                                                    </label>
                                                    <Field className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} type="text" name="lastName" id="LastName" placeholder="Last Name"/>
                                                    <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-6">
                                                    <label htmlFor="dateOfBirth"><i className="zmdi zmdi-date"></i></label>
                                                    <Field name="dateOfBirth" type="date" className={'form-control' + (errors.dateOfBirth && touched.dateOfBirth ? ' is-invalid' : '')} />
                                                    <ErrorMessage name="dateOfBirth" component="div" className="invalid-feedback" />
                                                </div>
                                                <div className="col-6">
                                                    <label htmlFor="gender">
                                                        <i className="zmdi zmdi-account material-icons-name"></i>
                                                    </label>
                                                    <Field type="text" name="gender"   as="select" id="gender" placeholder="Gender" className={'form-control' + (errors.gender && touched.gender ? ' is-invalid' : '')}>
                                                        <option value="">Gender</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                    </Field>
                                                    <ErrorMessage name="gender" component="div" className="invalid-feedback" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-6">
                                                    <label htmlFor="userRole"><i className="zmdi zmdi-email"></i></label>
                                                    <Field name="userRole" type="text" name="userRole" id="userRole" placeholder="User Role" as="select" className={'form-control' + (errors.userRole && touched.userRole ? ' is-invalid' : '')}>
                                                        <option value="">User Role</option>
                                                        <option value="Organiser">Organiser</option>
                                                        <option value="Student">Student</option>
                                                        <option value="Organise and Student">Organiser and Student</option>
                                                    </Field>
                                                    <ErrorMessage name="userRole" component="div" className="invalid-feedback" />
                                                </div>
                                                <div className="col-6">
                                                    <label htmlFor="currentGraduateLevel">
                                                        <i className="zmdi zmdi-account material-icons-name"></i>
                                                    </label>
                                                    <Field type="text" name="currentGraduateLevel" id="level" placeholder="GradeLevel" as="select" className={'form-control' + (errors.currentGraduateLevel && touched.currentGraduateLevel ? ' is-invalid' : '')}>
                                                        <option value="">Grade level</option>
                                                        <option value="Graduate">Graduate</option>
                                                        <option value="Undergraduate">Undergraduate</option>
                                                    </Field>
                                                    <ErrorMessage name="currentGraduateLevel" component="div" className="invalid-feedback" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phoneNumber"><i className="zmdi zmdi-number"></i></label>
                                            <Field className={'form-control' + (errors.phoneNumber && touched.phoneNumber ? ' is-invalid' : '')} type="number" name="phoneNumber" id="phoneNumber" placeholder="Phone Number"/>
                                            <ErrorMessage name="phoneNumber" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                            <Field className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} type="email" name="email" id="email" placeholder="Your Email"/>
                                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password"><i className="zmdi zmdi-lock"></i></label>
                                            <Field className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} type="password" name="password" id="password" placeholder="Password"/>
                                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="confirmPassword"><i className="zmdi zmdi-lock-outline"></i></label>
                                            <Field className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} type="password" name="confirmPassword" id="confirmPassword" placeholder="Repeat your password" />
                                            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <Field className={'form-check-input ' + (errors.agreeToPrivacyPolicy && touched.agreeToPrivacyPolicy ? ' is-invalid' : '')} type="checkbox" name="agreeToPrivacyPolicy" id="agreeToPrivacyPolicy" className="agreeToPrivacyPolicy"/>

                                            <label htmlFor="agreeToPrivacyPolicy" className="label-agree-term"><span><span></span></span>I
                                                agree all statements in
                                                    <Link to="/privacy-policy" className="term-service"> Terms of service</Link>
                                            </label>
                                            <ErrorMessage name="agreeToPrivacyPolicy" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group form-button">
                                            <button type="submit" disabled={isSubmitting} className="btn btn-primary wap-signup-button">
                                                {isSubmitting && <span className="spinner-border s-spinner-borderm mr-1"></span>}
                                                SignUp
                                            </button>

                                                <Link to="/" className="ps-2" >Cancel</Link>

                                        </div>
                                    </Form>
                                </div>
                                <div className="signup-image">
                                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                    <figure><img src="https://github.com/Sanjana-Nalawade/repoForAssetsOfProject/blob/main/signup-image.jpg?raw=true" alt="sing up image"/></figure>

                                        <Link to="/signin" className="signup-image-link">
                                            I am already member
                                        </Link>

                                </div>
                            </div>
                        </div>
                    </section>
                    )}
            </Formik>


        </>
    );
}
export default Register;