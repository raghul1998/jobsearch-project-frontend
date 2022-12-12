import React, { useEffect, useState } from "react";
import "./index.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import UploadImageAws from "../../uploadImageAws";
import { updateUser } from "../../../service/userThunks";
import { alertService } from "../../../service/alertService";
import NavigationSidebar from "../navigationSidebar/index";

const EditProfile = () => {
  let history = useNavigate();
  let currentUser = JSON.parse(localStorage.getItem("userProfile"));
  localStorage.setItem("imageUrl", localStorage.getItem("userImage"));

  const initialValues = {
    firstName: currentUser["firstName"],
    lastName: currentUser["lastName"],
    password: currentUser["password"],
    confirmPassword: currentUser["password"],
    phoneNumber: currentUser["phoneNumber"],
    profileImage: currentUser["profileImage"],
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    phoneNumber: Yup.number().required("Phone number is required"),
  });

  function onSubmit(fields, { setStatus, setSubmitting }) {
    setStatus();

    const updateUserDetails = {
      firstName: fields["firstName"],
      lastName: fields["lastName"],
      dateOfBirth: currentUser["dateOfBirth"],
      email: currentUser["email"],
      password: fields["password"],
      profileImage: localStorage.getItem("imageUrl"),
      phoneNumber: fields["phoneNumber"],
      gender: currentUser["gender"],
      currentGradLevel: currentUser["currentGradLevel"],
      userRole: currentUser["userRole"],
    };

    let userId = currentUser["_id"];

    console.log(updateUserDetails);
    console.log(userId);

    updateUser(userId, updateUserDetails)
      .then(() => {
        alertService.success("User profile was updated", {
          keepAfterRouteChange: true,
        });
        history("/dashboard");
      })
      .catch((error) => {
        setSubmitting(false);
        alertService.error(error);
      });
  }

  return (
    <>
      <NavigationSidebar />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <section className="signup mt-5">
            <div className="container">
              <div className="signup-content">
                <div className="signup-form">
                  <h2 className="form-title">Edit your profile</h2>
                  <Form
                    method="POST"
                    className="register-form"
                    id="register-form"
                  >
                    <div className="form-group">
                      <div className="row">
                        <div className="col-6">
                          <label htmlFor="FirstName">
                            <i className="zmdi zmdi-account material-icons-name"></i>
                          </label>
                          <Field
                            className={
                              "form-control" +
                              (errors.firstName && touched.firstName
                                ? " is-invalid"
                                : "")
                            }
                            type="text"
                            name="firstName"
                            id="FirstName"
                            placeholder="First Name"
                          />
                          <ErrorMessage
                            name="firstName"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="col-6">
                          <label htmlFor="LastName">
                            <i className="zmdi zmdi-account material-icons-name"></i>
                          </label>
                          <Field
                            className={
                              "form-control" +
                              (errors.lastName && touched.lastName
                                ? " is-invalid"
                                : "")
                            }
                            type="text"
                            name="lastName"
                            id="LastName"
                            placeholder="Last Name"
                          />
                          <ErrorMessage
                            name="lastName"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="phoneNumber">
                        <i className="zmdi zmdi-number"></i>
                      </label>
                      <Field
                        className={
                          "form-control" +
                          (errors.phoneNumber && touched.phoneNumber
                            ? " is-invalid"
                            : "")
                        }
                        type="number"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="Phone Number"
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">
                        <i className="zmdi zmdi-lock"></i>
                      </label>
                      <Field
                        className={
                          "form-control" +
                          (errors.password && touched.password
                            ? " is-invalid"
                            : "")
                        }
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="confirmPassword">
                        <i className="zmdi zmdi-lock-outline"></i>
                      </label>
                      <Field
                        className={
                          "form-control" +
                          (errors.confirmPassword && touched.confirmPassword
                            ? " is-invalid"
                            : "")
                        }
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Repeat your password"
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <UploadImageAws />
                    <p className="mt-1">Upload Your Profile Picture</p>

                    <div className="form-group form-button">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="custom-button"
                        style={{marginLeft: "0px"}}
                      >
                        {isSubmitting && (
                          <span className="spinner-border spinner-border-sm mr-1"></span>
                        )}
                        Update Profile
                      </button>
                      &nbsp; &nbsp; &nbsp;
                      <Link to="/feedpage" className="btn btn-link margin">
                        Cancel
                      </Link>
                    </div>
                  </Form>
                </div>
                <div className="signup-image">
                  {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                  <figure>
                    <img
                      src="https://github.com/Sanjana-Nalawade/repoForAssetsOfProject/blob/main/undraw_personal_information_re_vw8a.png?raw=true"
                      height="500px"
                      alt="sing up image"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </section>
        )}
      </Formik>
    </>
  );
};
export default EditProfile;
