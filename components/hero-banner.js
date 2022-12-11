import React from "react";

export const HeroBanner = (props) => {
    return (
        <div className=" mainbanner px-4 text-center">
            <div className="bubble">
                <h1 className="display-5 fw-bold">{props.bannertitle}</h1>
                <div className="">
                    <p className="lead mb-4">{props.bannertext}</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}