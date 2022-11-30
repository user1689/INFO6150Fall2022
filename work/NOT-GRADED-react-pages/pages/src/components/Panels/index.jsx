import React, { Component } from "react";

import './index.css';
import changeStyle from './helper'

export default class index extends Component {
    componentDidMount = () => {
        changeStyle();
    }
    render() {
        return (
            <div className="panel">
                <span id="panel__block">
                    <h2 className="panel__title">Long time Internet Subjects</h2>
                    <p>
                        Adipisicing obcaecati praesentium repellendus a iusto
                        Debitis nesciunt eius laborum nostrum illo lllo aliquid
                        amet.
                    </p>
                    <p>
                        Elit necessitatibus inventore sed aliquid magnam eos,
                        velit nisi Ea distinctio itaque suscipit animi
                        voluptate.
                    </p>
                    <p>
                        Elit quas similique pariatur eaque adipisicing Enim
                        delectus neque rerum sed nobis Dolor suscipit nulla?
                    </p>
                </span>

                <div className="panel__wrapper">
                    <div className="panel__img__right">
                        <img
                            src="http://placekitten.com/300/300"
                            alt="Image of Russian blue kitty"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
