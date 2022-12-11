import React from "react";

export const Button = (props) => {
    if (props.buttontype === "primary") {
        return (
            <a href={props.href} type="button" className="btn btn-primary btn-lg px-4 gap-3">{props.children}</a>
        );

    }
    else {
        return (
            <a href={props.href} type="button" className="btn btn-outline-secondary btn-lg px-4 gap-3">{props.children}</a>
        );
    }
}