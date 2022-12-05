import React from "react";
import {Helmet} from "react-helmet";

import "../../assets/img/favicon.png" ;
import "../../assets/img/apple-touch-icon.png" ;
import "../../assets/vendor/aos/aos.css" ;
import "../../assets/vendor/bootstrap/css/bootstrap.min.css" ;
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css" ;
import "../../assets/vendor/glightbox/css/glightbox.min.css" ;
import "../../assets/vendor/swiper/swiper-bundle.min.css";
import "../../assets/css/style.css" ;

import TodaysEvents from "./TodaysEvents";

import {Link} from "react-router-dom";

const test = () => {
    return (
        <>
            <div id="header" className="d-flex align-items-center header ">
                <div className="container-fluid container-xxl d-flex align-items-center">

                    <div id="logo" className="me-auto">

                        <Link to="/landing" className="scrollto">
                            <img
                                src="https://github.com/Sanjana-Nalawade/repoForAssetsOfProject/blob/main/logo%20new.png?raw=true"
                                alt="" title=""/>
                        </Link>
                    </div>

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>


                    <Link to="/signup" className="buy-tickets scrollto">
                        SignUp
                    </Link>

                    <Link to="/signin" className="buy-tickets scrollto">
                        SignIn
                    </Link>

                </div>
            </div>
            <div id="hero">
                <div className="hero-container" data-aos="zoom-in">
                    <br/>
                    <br/>
                </div>
            </div>
            <div id="main">

                <div id="about">

                    <div className="row">
                        <div className="col-lg-12 ms-3 pe-2">
                            <h2 className="text-white">About The Website</h2>
                            <p className="wap-white">WhatsAppening is for Northeastern University.
                                Since there are numerous events taking
                                place in and around the university,
                                there is no centralized platform for posting information about these
                                events. The
                                information posted is limited to
                                the departmental Instagram pages or is shared with others. This
                                website was created
                                to keep everyone up to date
                                on events taking place at and around the university.</p>
                        </div>
                    </div>

                </div>


                <div id="schedule" className="section-with-bg">
                    <div className="container">
                        <div className="section-header">
                            <br/>
                            <h2>Event Schedule</h2>
                            <p>Here is our recent events</p>
                        </div>
                        <TodaysEvents/>

                    </div>
                </div>

                <div id="speakers">
                    <div className="container">
                        <div className="section-header">
                            <h2>Meet Our Team</h2>
                            <p>Here are some of our creative team members</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="speaker">
                                    <img
                                        src="https://github.com/Sanjana-Nalawade/repoForAssetsOfProject/blob/main/greeshma_new.jpeg?raw=true"
                                        alt="Speaker 1" className="img-fluid"/>
                                    <div className="details">
                                        <h3><a href="speaker-details.html">Greeshma Ranganatha</a>
                                        </h3>
                                        <p>MSCS Student</p>
                                        <div className="social">
                                            <a href="https://github.com/greeshma21">
                                                <i className="bi bi-github"></i>
                                            </a>
                                            <a href="https://www.linkedin.com/in/greeshma-ranganatha-536097140/">
                                                <i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="speaker" height="230px">
                                    <img
                                        src="https://github.com/Sanjana-Nalawade/repoForAssetsOfProject/blob/main/sanjana_new.jpeg?raw=true"
                                        alt="Speaker 2" className="img-fluid"/>
                                    <div className="details">
                                        <h3><a href="speaker-details.html">Sanjana Nalawade</a></h3>
                                        <p>MSCS Student</p>
                                        <div className="social">
                                            <a href="https://github.com/Sanjana-Nalawade"><i
                                                className="bi bi-github"></i></a>
                                            <a href="https://www.linkedin.com/in/sanjana-nalawade-8b0a4b168/"><i
                                                className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="speaker">
                                    <img
                                        src="https://github.com/Sanjana-Nalawade/repoForAssetsOfProject/blob/main/pooja_new.jpeg?raw=true"
                                        alt="Speaker 3" className="img-fluid"/>
                                    <div className="details">
                                        <h3><a href="speaker-details.html">Pooja Nangude</a></h3>
                                        <p>MSCS Student</p>
                                        <div className="social">
                                            <a href="https://github.com/PoojaNangude"><i
                                                className="bi bi-github"></i></a>
                                            <a href="https://www.linkedin.com/in/pooja-nangude-212209191/"><i
                                                className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="speaker">
                                    <img
                                        src="https://github.com/Sanjana-Nalawade/repoForAssetsOfProject/blob/main/madhura_new_new.jpeg?raw=true"
                                        alt="Speaker 4" className="img-fluid"/>
                                    <div className="details">
                                        <h3><a href="speaker-details.html">Madhura Vaidya</a></h3>
                                        <p>MSCS Student</p>
                                        <div className="social">
                                            <a href="https://github.com/madhura0106"><i
                                                className="bi bi-github"></i></a>
                                            <a href="https://www.linkedin.com/in/madhura-vaidya/"><i
                                                className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div id="contact" className="section-bg">

                    <div className="container">

                        <div className="section-header">
                            <h2>Contact Us</h2>
                            <p>Feel free to reach out to us</p>
                        </div>

                        <div className="row contact-info">

                            <div className="col-md-4">
                                <div className="contact-address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h3>Address</h3>
                                    <address>360 Huntington Ave, Boston, MA 02115</address>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="contact-phone">
                                    <i className="bi bi-phone"></i>
                                    <h3>Phone Number</h3>
                                    <p><a href="tel:+155895548855">+1 9999 99999 99</a></p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="contact-email">
                                    <i className="bi bi-envelope"></i>
                                    <h3>Email</h3>
                                    <p><a
                                        href="mailto:info@example.com">contactus@whatsappening.com</a>
                                    </p>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>


            </div>


            <div id="footer" className="footer">
                <div className="footer-top">

                    <div className="row">

                        <div className="col-lg-3 col-md-6 footer-info ms-5">
                            <img
                                src="https://github.com/Sanjana-Nalawade/repoForAssetsOfProject/blob/main/logo%20new.png?raw=true"
                                alt="TheEvenet"/>

                        </div>


                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <Link to="/">Home</Link>
                                </li>
                                <li><i className="bi bi-chevron-right"></i> <Link
                                    to="/signin">SignIn</Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link
                                    to="/signup">SignUp</Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link
                                    to="/privacy-policy">Privacy policy</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h4>Contact Us</h4>
                            <p>
                                360 Huntington Ave,<br/>
                                Boston, MA 02115<br/>
                                United States <br/>
                                <strong>Phone:</strong> +1 9999 99999 99<br/>
                                <strong>Email:</strong> contactus@whatsappening.com<br/>
                            </p>


                        </div>

                    </div>

                </div>


                <div className="credits">

                    <br/>
                    Designed by <a href="#">WhatsAppening Team</a>
                </div>

            </div>


            <Helmet>
                <script src="assets/vendor/aos/aos.js"></script>
                <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
                <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
                <script src="assets/vendor/php-email-form/validate.js"></script>
                <script src="assets/js/main.js"></script>
            </Helmet>
        </>
    );
}
export default test;