import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
// import { loginUser } from "../../service/userThunks";
import { loginUser } from "../../service/userThunks.js";
import "./index.css";
import * as Yup from "yup";

const LoginComponent = () => {
  let navigate = useNavigate();
  localStorage.setItem("userId", "");
  localStorage.setItem("userRole", "");

  const initialLoginParams = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  function onSubmit(fields, { setStatus, setSubmitting }) {
    setStatus();
    loginUser(fields["email"], fields["password"]).then((user) => {
      if (user != null) {
        localStorage.setItem("userId", user["_id"]);
        localStorage.setItem("userRole", user["userRole"]);
        localStorage.setItem(
          "userName",
          user["firstName"] + " " + user["lastName"]
        );
        localStorage.setItem("userImage", user["profileImage"]);
        console.log("Navigate to the dashboard test in success");
        navigate("/dashboard");
      } else {
        setSubmitting(false);
      }
    });
  }
  return (
    <>
      <section className="sign-in">
        <div className="container">
          <div className="loginContent">
            <div className="loginImage">
              <figure>
                <img
                  src={require("../../assets/images/login.jpg")}
                  alt="login"
                />
              </figure>
              <div style={{ textAlign: "center" }} className="ps-5">
                <Link style={{ textDecoration: "none" }} to="/signupPage">
                  {" "}
                  No account? Signup here
                </Link>
              </div>
            </div>

            <div className="loginForm">
              <h2 className="form-title">Login</h2>
              <Formik
                initialValues={initialLoginParams}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ errors, touched, isSubmitting }) => (
                  <Form>
                    <div className="form-group">
                      <label htmlFor="email">
                        <i className="bi bi-person"></i>
                      </label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        className={
                          "" +
                          (errors.email && touched.email ? " is-invalid" : "")
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">
                        <i className="bi bi-lock"></i>
                      </label>
                      <Field
                        name="password"
                        id="password"
                        placeholder="Password"
                        type="password"
                        className={
                          "" +
                          (errors.password && touched.password
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="checkbox"
                        name="remember-me"
                        id="remember-me"
                        className="agree-term"
                      />
                      <label htmlFor="remember-me" className="label-agree-term">
                        <span>
                          <span></span>
                        </span>
                        Remember me
                      </label>
                    </div>
                    <div className="form-group form-button">
                      <input
                        type="submit"
                        name="signin"
                        id="signin"
                        disabled={isSubmitting}
                        className="form-submit btn custom-button"
                        style={{color: "#fff", backgroundColor: "#f82", marginLeft: "0px"}}
                        value="Log in"
                      />
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
};

export default LoginComponent;
