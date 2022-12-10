import React, { Component } from "react";

import "./index.css";

export default class index extends Component {
    render() {
        const {randomCats} = this.props;
        return (
            <div class="gallery__image">
                {randomCats.map((cat, idx) => {
                    return (
                        <img
                            key={idx}
                            src={`${cat.img}`}
                            alt={`${cat.catName}`}
                        />
                    );
                })}
            </div>
        );
    }
}
