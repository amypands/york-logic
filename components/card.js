import React from "react";

export const Card = (props) => {
    return (
        <div className="card infocard">
            <div className="card-body">
                <h5 className="card-title">{props.cardtitle}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.cardsubtitle}</h6>
                <div className="card-text">{props.children}</div>
            </div>
        </div>

    );
}