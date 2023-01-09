import React, { Component } from "react";

import "./index.css";

export default class index extends Component {
    render() {
        const {
            type,
            onChange,
            onBlur,
            value,
            checked,
            placeholder,
            className,
        } = this.props;
        return (
            <input
                className={className}
                type={`${type}`}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                autoComplete="off"
                checked={checked}
                placeholder={placeholder}
            />
        );
    }
}
