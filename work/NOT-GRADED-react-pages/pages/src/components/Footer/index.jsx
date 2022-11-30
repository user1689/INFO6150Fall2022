import React, { Component } from "react";

import './index.css'

export default class index extends Component {
    render() {
        return (
            <footer className="footer">
                <ul className="footer__items">
                    <li>
                        <a href="./Privacy.html">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="./AboutUs.html">About Us</a>
                    </li>
                    <li>
                        <a href="./ContactUs.html">Contact Us</a>
                    </li>
                </ul>
            </footer>
        );
    }
}
