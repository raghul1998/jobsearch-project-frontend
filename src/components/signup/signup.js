import * as Yup from "yup";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./signUp.css";
import { Link } from "react-router-dom";
import * as alertService from "react-dom/test-utils";
import setUpProfile from "../../service/userService";
import { createUser } from "../../service/userThunks.js";

const SignUp = () => {
  const schemaForValidataion = Yup.object().shape({
    firstName: Yup.string().required("Please enter first Name"),
    lastName: Yup.string().required("Please enter Last Name"),
    dob: Yup.string().required("Please enter Date Of Birth"),
    email: Yup.string().email("Please enter a valid email"),
    password: Yup.string()
      .min(4, "Please enter at least characters of length 4")
      .required("Please enter password"),
    matchPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Please enter the same password")
      .required("Confirm Password is required"),
    role: Yup.string().required("Please enter the role."),
    termsAgreed: Yup.bool().oneOf(
      [true],
      "Please accept to the terms and condition"
    ),
    number: Yup.number().required("Please enter your number"),
    sex: Yup.string().required("Please enter your sex"),
    level: Yup.string().required("What is your level"),
  });

  function submitForm(input, { setStatus, setSubmitting }) {
    setStatus();

    let profileImage =
      "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png";

    let role = input["role"].toString().toLowerCase();
    const user = {
      firstName: input["firstName"],
      lastName: input["lastName"],
      dob: input["dob"],
      email: input["email"],
      password: input["password"],
      image: profileImage,
      number: input["number"],
      sex: input["sex"].toString().toLowerCase(),
      level: input["level"].toString().toLowerCase(),
      role: role,
    };

    createUser(user)
      .then(() => {
        // alertService.success('Sign Up was  successful', { keepAfterRouteChange: true });
        // history.push('/signin');
        console.log("User created");
      })
      .catch((error) => {
        setSubmitting(false);
        // alertService.error(error);
        console.log("Error submitting the user");
      });
  }

  const defaultValue = {
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    matchPassword: "",
    role: "",
    termsAgreed: true,
    number: "",
    sex: "",
    level: "",
    imageOfProfile: "",
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
                          <label htmlFor="dob">
                            <i className=""></i>
                          </label>
                          <Field
                            name="dob"
                            type="date"
                            className={
                              "form-control" +
                              (errors.dob && touched.dob ? " is-invalid" : "")
                            }
                          />
                          <ErrorMessage
                            name="dob"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="col-6">
                          <label htmlFor="sex">
                            <i className="material-icons-name"></i>
                          </label>
                          <Field
                            type="text"
                            name="sex"
                            as="select"
                            id="sex"
                            placeholder="sex"
                            className={
                              "form-control" +
                              (errors.sex && touched.sex ? " is-invalid" : "")
                            }
                          >
                            <option value="">Gender</option>
                            <option value="M">M</option>
                            <option value="F">F</option>
                            <option value="non-binary">Non binary</option>
                          </Field>
                          <ErrorMessage
                            name="sex"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="signup-group">
                      <div className="row">
                        <div className="col-6">
                          <label htmlFor="role">
                            <i className=""></i>
                          </label>
                          <Field
                            name="role"
                            type="text"
                            id="role"
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
                            <option value="Organise and Student">
                              Company
                            </option>
                          </Field>
                          <ErrorMessage
                            name="role"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="col-6">
                          <label htmlFor="level">
                            <i className="material-icons-name"></i>
                          </label>
                          <Field
                            type="text"
                            name="level"
                            id="level"
                            placeholder="level"
                            as="select"
                            className={
                              "form-control" +
                              (errors.level && touched.level
                                ? " is-invalid"
                                : "")
                            }
                          >
                            <option value="">What is your level</option>
                            <option value="undergraduate">Undergraduate</option>
                            <option value="graduate">Graduate</option>
                          </Field>
                          <ErrorMessage
                            name="level"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="signup-group">
                      <label htmlFor="number">
                        <i className=""></i>
                      </label>
                      <Field
                        className={
                          "form-control" +
                          (errors.number && touched.number ? " is-invalid" : "")
                        }
                        type="number"
                        name="number"
                        id="number"
                        placeholder="Number"
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
                        className="btn btn-primary wap-signup-button"
                      >
                        {isSubmitting && (
                          <span className="spinner-border s-spinner-borderm mr-1"></span>
                        )}
                        Sign Up
                      </button>
                      <Link to="/" className="ps-2">
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
