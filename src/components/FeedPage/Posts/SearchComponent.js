import React from "react";

const SearchComponent = () => {

    return(
        <>
          {/*  <div className="row">*/}
                {/*<div className="col-10 border rounded-pill wd-textbox mb-2">*/}
                    {/*<div className="input-group wd-search">
                        <span className="input-group-text"><i className="fas fa-search"></i></span>
                        <input type="text" className="form-control" placeholder="Search Post"/>
                    </div>*/}
                {/*<a href="/public/a2/twitter/like.html"><i className="fas fa-cog fa-2x"></i></a>*/}
                {/*</div>*/}

            {/*</div>*/}
            <div className="container justify-content-center">
                <div className="row">
                    <div className="col-md-8">
                        <div className="input-group mb-3"><input type="text" className="form-control input-text"
                                                                 placeholder="Search products...."
                                                                 aria-label="Recipient's username"
                                                                 aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-warning btn-lg" type="button">
                                    <i className="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SearchComponent;
