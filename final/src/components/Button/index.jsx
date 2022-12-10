import React, { Component } from "react";

import "./index.css";

export default class index extends Component {
    render() {
        const { type, onClick, disabled, children, extraClassName } =
            this.props;
        return (
            <button
                type={type}
                className={extraClassName}
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </button>
        );
    }
}
