import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../assets/vendor/aos/aos.css";
import "../../assets/vendor/swiper/swiper-bundle.min.css";

import AOS from "aos";
import "aos/dist/aos.css";

import "./index.css";
import RecentJobs from "./recentjobs";
import Externalapi from "../externalApi";

const LandingComponent = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            <h1>
              Career<span>Genie</span>
            </h1>
          </a>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signupPage">Signup</Link>
              </li>
            </ul>
          </nav>

          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
      </header>

      <section id="hero" className="hero">
        <div className="container position-relative">
          <div className="row gy-5" data-aos="fade-in">
            <div className="col-lg-12  order-lg-1 d-flex flex-column justify-content-center text-center caption">
              <h2>
                A place where dream <span>meets</span>
                <span className="circle"> reality</span>
              </h2>
              <p>Let us help you to find your perfect opportunity!!!</p>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>About Us</h2>
              <p>
                CareerGenie is designed where job posts can be created and
                viewed to land your dream job
              </p>
            </div>

            <div className="row gy-4">
              <div className="col-lg-4">
                <img
                  src={require(`../../assets/images/successLanding.jpg`)}
                  className="img-fluid rounded-4 mb-4"
                  alt=""
                />
              </div>
              <div className="col-lg-8">
                <div className="content ps-0 ps-lg-5">
                  <p>
                    CareerGenie helps to connect the students who are new to the
                    field to have exclusive and immediate access to the jobs
                    that are available in the market. This gives an edge over
                    their other competitors in the field by giving them
                    opportunity to be the first in the line of applicants and be
                    viewed in a broder perspective.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-1-square"></i> Three different user
                      roles for students, recruiters and special university
                      access.
                    </li>
                    <li>
                      <i className="bi bi-2-square"></i> Students can view the
                      job posts and select the jobs to apply.
                    </li>
                    <li>
                      <i className="bi bi-3-square"></i> Recruiters can create
                      the job post and view the applied students stats.
                    </li>
                    <li>
                      <i className="bi bi-4-square"></i> University also has
                      exclusive access to create job posts on behalf of the
                      company or recruiters.
                    </li>
                    <li>
                      <i className="bi bi-5-square"></i> All users can see the
                      applied count in the posts.
                    </li>
                    <li>
                      <i className="bi bi-6-square"></i> The user can also edit
                      their profile using edit option provided in the dashboard.
                    </li>
                    <li>
                      <i className="bi bi-7-square"></i> Search option helps to
                      search for a desired job post and a separate filter is
                      enabled for todays posts.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="recent-posts" className="recent-posts sections-bg">
          <div className="container" data-aos="fade-up">
            <div id="schedule" className="section-with-bg">
              <div className="container">
                <div className="section-header">
                  <br />
                  <h2>Trending job posts</h2>
                  <p>Here is our recent posts that are trending...</p>
                </div>
                <RecentJobs />
              </div>
            </div>

            <div className="section-header">
              <h2>Recent Blog Posts</h2>
              <p>
                Trending top 3 blogs on the internet about{" "}
                <b>#jobs#usa#students</b>(Source: Google Search)
              </p>
            </div>

            <div className="row gy-4">
              <Externalapi />
            </div>
          </div>
        </section>

        <section id="team" className="team sections-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Our Team</h2>
            </div>

            <div className="row gy-4">
              <div
                className="col-xl-3 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="member">
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                  <img
                    src={require(`../../assets/images/successLanding.jpg`)}
                    className="img-fluid"
                    alt=""
                  />
                  <h4>Jai Iyyappa Vignesh Manivannan</h4>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="member">
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                  <img
                    src={require(`../../assets/images/successLanding.jpg`)}
                    className="img-fluid"
                    alt=""
                  />
                  <h4>Raghul S</h4>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="member">
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                  <img
                    src={require(`../../assets/images/successLanding.jpg`)}
                    className="img-fluid"
                    alt=""
                  />
                  <h4>Karthik Tickoo</h4>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="member">
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                  <img
                    src={require(`../../assets/images/successLanding.jpg`)}
                    className="img-fluid"
                    alt=""
                  />
                  <h4>Subhankar Shah</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="footer">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-12 col-md-12 footer-info text-center">
              <div className="social-links d-flex mt-4 justify-content-center">
                <a href="#" className="twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>CareerGenie</span>
            </strong>
            . All Rights Reserved 2022
          </div>
          <div className="credits">
            Designed by <a href="#">NEUDevs</a>
          </div>
        </div>
      </footer>

      <a
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <Helmet>
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
        />

        <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
      </Helmet>
    </>
  );
};

export default LandingComponent;
