import React, { Component } from "react";

import './index.css'

export default class index extends Component {
    render() {
        return (
            <form action="http://localhost:3000/register" method="post">
                <div className="title">
                    <h2>Registration</h2>
                </div>
                <div className="input">
                    <div className="input_box">
                        <label>
                            <span className="input_name">Name</span>
                            <input
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                pattern="^[a-zA-Z0-9_-]{3,16}$"
                                title="Please enter a username of length 3 to 16"
                                required
                            />
                            <span className="required_mark">*</span>
                        </label>
                    </div>
                    <div className="input_box">
                        <label>
                            <span className="input_name">Email</span>
                            <input
                                name="email"
                                type="text"
                                placeholder="Enter your email"
                                pattern="^[\.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$"
                                title="Please enter a valid email"
                                required
                            />
                            <span className="required_mark">*</span>
                        </label>
                    </div>
                    <div className="input_box">
                        <label>
                            <span className="input_name">
                                Select Your Plan Tier
                            </span>
                            <select name="tier" required>
                                <option value="">Please select</option>
                                <option value="1">Silver Tier</option>
                                <option value="2">Gold Tier</option>
                                <option value="3">Platinum Tier</option>
                            </select>
                            <span className="required_mark">*</span>
                        </label>
                    </div>
                </div>
                <div className="check_box">
                    <label>
                        <input type="checkbox" name="annoy_me" id="" defaultChecked />
                        <span className="check_box_text">
                            Do you want us to send you annoying emails?
                        </span>
                    </label>
                </div>
                <div className="submit_button">
                    <input type="submit" value="Register" />
                </div>
            </form>
        );
    }
}
