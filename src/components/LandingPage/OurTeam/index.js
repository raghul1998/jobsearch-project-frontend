import React from "react";
import "./index.css";

const OurTeam = () => {
    return(
        <>
            <div className="w3-container pt-3" padding="128px 16px" id="team">
                <h3 className="w3-center">THE TEAM</h3>
                <div className="w3-row-padding w3-grayscale" margin-top="64px">
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <div className="w3-card">
                            <img className="card-img-size" src="https://github.com/Sanjana-Nalawade/repoForAssetsOfProject/blob/main/greeshma3.jpeg?raw=true" alt="John" width="100%"/>
                                <div className="w3-container">
                                    <h3>Greeshma Ranganatha</h3>
                                    <p className="w3-opacity">CEO & Founder</p>
                                    <p>Senior executive offering a record of verifiable success in new business development,
                                        sales and marketing.</p>
                                    <p>
                                        <a className="ourteamlink" href="mailto:greeshma@gmail.com">
                                        <button className="w3-button w3-light-grey w3-block"><i
                                            className="fa fa-envelope"></i> Contact
                                        </button>
                                        </a>
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <div className="w3-card">
                            <img className="card-img-size" src="https://github.com/Sanjana-Nalawade/repoForAssetsOfProject/blob/main/Sanjana.png?raw=true" alt="Jane" width="100%"/>
                                <div className="w3-container">
                                    <h3>Sanjana Nalawade</h3>
                                    <p className="w3-opacity">Art Director</p>
                                    <p>Creative Designer adept at developing and creating digital advertising materials
                                        for multiple social media platforms.</p>
                                    <p>
                                        <a className="ourteamlink" href="mailto:sanjana@gmail.com">
                                        <button className="w3-button w3-light-grey w3-block"><i
                                            className="fa fa-envelope"></i> Contact
                                        </button>
                                        </a>
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <div className="w3-card">
                            <img className="card-img-size" src="https://github.com/Sanjana-Nalawade/repoForAssetsOfProject/blob/main/pooja.jpeg?raw=true" alt="Mike" width="100%"/>
                                <div className="w3-container">
                                    <h3>Pooja Nangude</h3>
                                    <p className="w3-opacity">Web Designer</p>
                                    <p>Providing quality web app, regularly adding new information, establishing trust, marketing your site on other websites and social media..</p>
                                    <p>
                                        <a className="ourteamlink" href="mailto:pooja@gmail.com">
                                        <button className="w3-button w3-light-grey w3-block"><i
                                            className="fa fa-envelope"></i> Contact
                                        </button>
                                        </a>
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <div className="w3-card">
                            <img className="card-img-size" src="https://github.com/Sanjana-Nalawade/repoForAssetsOfProject/blob/main/madhura.jpeg?raw=true" alt="Dan" width="100%"/>
                                <div className="w3-container">
                                    <h3>Madhura Vaidya</h3>
                                    <p className="w3-opacity">Designer</p>
                                    <p> A highly creative individual deliver high quality content based on
                                        current trends in designs and standards.</p>
                                    <p>
                                        <a className="ourteamlink" href="mailto:madhura@gmail.com">
                                        <button className="w3-button w3-light-grey w3-block">

                                            <i className="fa fa-envelope"></i> Contact
                                        </button>
                                        </a>
                                    </p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OurTeam;