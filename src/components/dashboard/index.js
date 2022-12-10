import React from "react";
import {useHistory} from "react-router-dom";

const Index = () => {
    const userRole = localStorage.getItem('userRole');
    let history = useHistory();
    
    const goToNewEventPage = () => {
      history.push("/new-event");
    }

    return(
        <>
            <div className="row mt-2 wap-outer-feed mb-5">
                <div className="col-12">
                    {/*  code for navigation sidebar */}
                </div>
            </div>
            <div className="row mt-2 wap-outer-feed">
                <div className="row mt-4">
                    <div className="d-sm-none d-md-none d-lg-block col-lg-3 col-xl-3 ps-5 pe-5">
                        <div className="row pb-5">
                            {/*  code for profile */}
                        </div>
                        <div className="row pt-5">
                            {
                                (userRole === 'organiser' || userRole === 'both') &&
                                <div className="ps-5">
                                    <div className="form-group form-button">
                                        <input type="submit" name="signin" id="signin"  className="form-submit btn btn-primary"
                                               value="Create New Event" onClick={() => goToNewEventPage()}/>
                                    </div>
                                </div>
                            }
                        </div>

                    </div>
                    <div className="col-10 col-md-10 col-lg-7 col-xl-6">
                       {/* code for posts*/}
                    </div>
                    <div className="d-sm-none d-md-none d-lg-block col-lg-2 col-xl-3">
                        {/* code for today events*/}
                    </div>
                </div>
            </div>

        </>
        )
        };

export default Index;