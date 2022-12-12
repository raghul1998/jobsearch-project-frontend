import * as Yup from "yup";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./signUp.css";
import { Link } from "react-router-dom";
import { createUser } from "../../service/userThunks.js";
import { alertService } from "../../service/alertService";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  let history = useNavigate();
  const schemaForValidataion = Yup.object().shape({
    firstName: Yup.string().required("Please enter first Name"),
    lastName: Yup.string().required("Please enter Last Name"),
    dateOfBirth: Yup.string().required("Please enter Date Of Birth"),
    email: Yup.string().email("Please enter a valid email"),
    password: Yup.string()
      .min(4, "Please enter at least characters of length 4")
      .required("Please enter password"),
    matchPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Please enter the same password")
      .required("Confirm Password is required"),
    userRole: Yup.string().required("Please enter the role."),
    termsAgreed: Yup.bool().oneOf(
      [true],
      "Please accept to the terms and condition"
    ),
    phoneNumber: Yup.number().required("Please enter your number"),
    gender: Yup.string().required("Please enter your gender"),
    currentGradLevel: Yup.string().required("What is your level"),
  });

  function submitForm(input, { setStatus, setSubmitting }) {
    setStatus();

    let profileImage =
      "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png";

    let userRole = input["userRole"].toString().toLowerCase();
    const user = {
      firstName: input["firstName"],
      lastName: input["lastName"],
      dateOfBirth: input["dateOfBirth"],
      email: input["email"],
      password: input["password"],
      profileImage: profileImage,
      phoneNumber: input["phoneNumber"],
      gender: input["gender"].toString().toLowerCase(),
      currentGradLevel: input["currentGradLevel"].toString().toLowerCase(),
      userRole: userRole,
    };
    // debugger;
    createUser(user)
      .then(() => {
        alertService.success("Sign Up was  successful", {
          keepAfterRouteChange: true,
        });
        history("/login");
        console.log("User created");
      })
      .catch((error) => {
        setSubmitting(false);
        alertService.error(error);
        console.log("Error submitting the user");
      });
  }

  const defaultValue = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    password: "",
    matchPassword: "",
    userRole: "",
    termsAgreed: true,
    phoneNumber: "",
    gender: "",
    currentGradLevel: "",
    profileImage: "",
  };

  return (
    <>
      <Formik
        initialValues={defaultValue}
        validationSchema={schemaForValidataion}
        onSubmit={submitForm}
      >
        {({ errors, touched, isSubmitting }) => (
          <section className="style-background signup">
            <div className="container">
              <div className="form-style">
                <div className="signup-form">
                  <h2 className="form-title">Sign Up</h2>
                  <Form
                    method="POST"
                    className="style-sign-up"
                    id="register-form"
                  >
                    <div className="signup-group">
                      <div className="row">
                        <div className="col-6">
                          <label htmlFor="FirstName">
                            <i className="material-icons-name"></i>
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
                          <label htmlFor="lastName">
                            <i className="material-icons-name"></i>
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
                            id="LaseName"
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
                    <div className="signup-group">
                      <div className="row">
                        <div className="col-6">
                          <label htmlFor="dateOfBirth">
                            <i className=""></i>
                          </label>
                          <Field
                            name="dateOfBirth"
                            type="date"
                            className={
                              "form-control" +
                              (errors.dateOfBirth && touched.dateOfBirth
                                ? " is-invalid"
                                : "")
                            }
                          />
                          <ErrorMessage
                            name="dateOfBirth"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="col-6">
                          <label htmlFor="gender">
                            <i className="material-icons-name"></i>
                          </label>
                          <Field
                            type="text"
                            name="gender"
                            as="select"
                            id="gender"
                            placeholder="gender"
                            className={
                              "form-control" +
                              (errors.gender && touched.gender
                                ? " is-invalid"
                                : "")
                            }
                          >
                            <option value="">Gender</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                            <option value="non-binary">Non binary</option>
                          </Field>
                          <ErrorMessage
                            name="gender"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="signup-group">
                      <div className="row">
                        <div className="col-6">
                          <label htmlFor="userRole">
                            <i className=""></i>
                          </label>
                          <Field
                            name="userRole"
                            type="text"
                            id="userRole"
                            placeholder="Role"
                            as="select"
                            className={
                              "form-control" +
                              (errors.userRole && touched.userRole
                                ? " is-invalid"
                                : "")
                            }
                          >
                            <option value="">What is your role</option>
                            <option value="Organiser">
                              University Representative
                            </option>
                            <option value="Student">Student</option>
                            <option value="both">Company</option>
                          </Field>
                          <ErrorMessage
                            name="userRole"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="col-6">
                          <label htmlFor="currentGradLevel">
                            <i className="material-icons-name"></i>
                          </label>
                          <Field
                            type="text"
                            name="currentGradLevel"
                            id="currentGradLevel"
                            placeholder="currentGradLevel"
                            as="select"
                            className={
                              "form-control" +
                              (errors.currentGradLevel &&
                              touched.currentGradLevel
                                ? " is-invalid"
                                : "")
                            }
                          >
                            <option value="">What is your level</option>
                            <option value="undergraduate">Undergraduate</option>
                            <option value="graduate">Graduate</option>
                          </Field>
                          <ErrorMessage
                            name="currentGradLevel"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="signup-group">
                      <label htmlFor="phoneNumber">
                        <i className=""></i>
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
                        placeholder="phoneNumber"
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="signup-group">
                      <label htmlFor="email">
                        <i className=""></i>
                      </label>
                      <Field
                        className={
                          "form-control" +
                          (errors.email && touched.email ? " is-invalid" : "")
                        }
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email address"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="signup-group">
                      <label htmlFor="password">
                        <i className=""></i>
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
                    <div className="signup-group">
                      <label htmlFor="matchPassword">
                        <i className=""></i>
                      </label>
                      <Field
                        className={
                          "form-control" +
                          (errors.matchPassword && touched.matchPassword
                            ? " is-invalid"
                            : "")
                        }
                        type="password"
                        name="matchPassword"
                        id="matchPassword"
                        placeholder="Please type your password again"
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="signup-group submit-button">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="custom-button me-2"
                        style={{marginLeft: "0px"}}
                      >
                        {isSubmitting && (
                          <span className="spinner-border s-spinner-borderm mr-1"></span>
                        )}
                        Sign Up
                      </button>
                      <Link to="/login" className="ps-2">
                        Already have an account? Sign In
                      </Link>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </section>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
