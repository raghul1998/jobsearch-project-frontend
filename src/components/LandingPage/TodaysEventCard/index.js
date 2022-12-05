import React, {useEffect, useState} from "react";
/*import "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js";*/
import {getLatestPosts} from "../../../services/eventService";
import {useNavigate} from "react-router-dom";
import "./index.css";

const TodaysEventCard = () => {
    const [posts, setPosts] = new useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getLatestPosts().then((p)=>{
            setPosts(p)
        }).catch(() => {
            setPosts(null);
        })
    },[])

    useEffect(() => {
        console.log("posts",posts)
    },[setPosts])

    const goToLogin = () => {
        navigate("/signin");
    }

    return(
        <>

            {/*<div className="row carousel slide carousel-multi-item" data-ride="carousel">*/}

               {/* <div className="controls-top">
                    <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fas fa-chevron-left"></i></a>
                    <a className="btn-floating" href="#multi-item-example" data-slide="next"><i
                        className="fas fa-chevron-right"></i></a>
                </div>

                <ol className="carousel-indicators">
                    <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
                    <li data-target="#multi-item-example" data-slide-to="1"></li>

                </ol>*/}
            {posts != null &&
                <div>
                    <div className="carousel-inner pt-3" role="listbox">


                        <div className="carousel-item active">
                            <div className="container-fluid">
                                <div className="row mt-1">


                            {posts.map((post) => {
                                return (
                                        <div className="col-3">
                                            <div className="card mb-2">
                                                <div>
                                                <img className="card-img-top fit-image"
                                                     src={post["image"]}
                                                     alt="Card image cap" width="100px" height="100px"/>
                                                </div>
                                                <div className="card-body">
                                                    <h4 className="card-title">{post["eventName"]}</h4>
                                                    <p className="card-text">{post["shortDescription"]}</p>
                                                    <a className="btn btn-primary" onClick={() => goToLogin()}>Attend?</a>
                                                </div>
                                            </div>
                                        </div>
                                )
                            })}


                            {/*<div className="col-md-3">*/}
                            {/*    <div className="card mb-2">*/}
                            {/*        <img className="card-img-top"*/}
                            {/*             src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"*/}
                            {/*             alt="Card image cap"/>*/}
                            {/*        <div className="card-body">*/}
                            {/*            <h4 className="card-title">Card title</h4>*/}
                            {/*            <p className="card-text">Some quick example text to build on the card title and*/}
                            {/*                make up the bulk of the*/}
                            {/*                card's content.</p>*/}
                            {/*            <a className="btn btn-primary">Interested?</a>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/*<div className="col-md-3" float="left">*/}
                            {/*    <div className="card mb-2">*/}
                            {/*        <img className="card-img-top"*/}
                            {/*             src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"*/}
                            {/*             alt="Card image cap"/>*/}
                            {/*        <div className="card-body">*/}
                            {/*            <h4 className="card-title">Card title</h4>*/}
                            {/*            <p className="card-text">Some quick example text to build on the card title and*/}
                            {/*                make up the bulk of the*/}
                            {/*                card's content.</p>*/}
                            {/*            <a className="btn btn-primary">Interested?</a>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/*<div className="col-md-3" float="left">*/}
                            {/*    <div className="card mb-2">*/}
                            {/*        <img className="card-img-top"*/}
                            {/*             src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"*/}
                            {/*             alt="Card image cap"/>*/}
                            {/*        <div className="card-body">*/}
                            {/*            <h4 className="card-title">Card title</h4>*/}
                            {/*            <p className="card-text">Some quick example text to build on the card title and*/}
                            {/*                make up the bulk of the*/}
                            {/*                card's content.</p>*/}
                            {/*            <a className="btn btn-primary">Interested?</a>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                        </div>

                    </div>


                </div>
                    </div>
            </div>
            }

        </>

    )
}
export default TodaysEventCard;