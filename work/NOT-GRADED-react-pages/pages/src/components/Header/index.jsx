import React, { Component } from "react";

import "./index.css"

export default class index extends Component {
    handleClick = (event) => {
        const key = event.target.text;
        if (key === "Home") {
            this.props.changePage(0);
        } else if (key === "About") {
            this.props.changePage(1);
        } else if (key === "Register") {
            this.props.changePage(2);
        }
    }
    render() {
        return (
            <header>
                <div className="logo">
                    <a href="./index.html">
                        <img
                            src="http://placekitten.com/200/200"
                            alt="logo"
                            width="75px"
                        />
                    </a>
                    <h1>Only Cats</h1>
                </div>
                <nav className="menubar">
                    <ul className="menubar__menu" onClick={this.handleClick}>
                        <li className="dropdown">
                            <a className="dropdown__button" href="#">
                                Home
                            </a>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown__button" href="#">
                                About
                            </a>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown__button" href="#">
                                Register
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}
