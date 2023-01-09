import React, { Component } from "react";

import "./index.css";
import Detail from "../Detail";

export default class index extends Component {
    render() {
        const { catId, randomCats, theme } = this.props;
        return (
            <div className={`panel ${theme}__panel`}>
                <span id="panel__block">
                    <h3 className="panel__title">{`${randomCats[catId].carName}`}</h3>
                </span>
                <div className="panel__wrapper">
                    <div className="panel__img__left">
                        <img
                            src={`${randomCats[catId].img}`}
                            alt={`${randomCats[catId].carName}`}
                        />
                    </div>
                    <Detail detailIdx={randomCats[catId].detailIdx}></Detail>
                </div>
            </div>
        );
    }
}
