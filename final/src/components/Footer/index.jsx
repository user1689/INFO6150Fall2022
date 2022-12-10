import React, { Component } from "react";

import "./index.css";

export default class index extends Component {
    render() {
        const { theme, handleClick } = this.props;
        return (
            <footer className="footer">
                <ul className={`footer__items ${theme}__footer`}>
                    <li>
                        <a
                            className={`${theme}__footer`}
                            href="#"
                            id="id__privacy"
                            onClick={handleClick}
                        >
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a
                            className={`${theme}__footer`}
                            href="#"
                            id="id__about"
                            onClick={handleClick}
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a
                            className={`${theme}__footer`}
                            href="#"
                            id="id__contact"
                            onClick={handleClick}
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
            </footer>
        );
    }
}
