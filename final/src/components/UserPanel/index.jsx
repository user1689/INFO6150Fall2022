import React, { Component } from "react";

import "./index.css"

export default class index extends Component {
    render() {
        return (
            <form
                className="model__form"
                id="form"
                method="post"
            >
                <div className="form__title">
                    <h2>User Info</h2>
                    <Icon
                        onClick={toggleModal}
                        extraClassName="close gg-close"
                    ></Icon>
                </div>
            </form>
        );
    }
}
