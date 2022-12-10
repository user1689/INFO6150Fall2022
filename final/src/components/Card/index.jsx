import React, { Component } from "react";

import "./index.css";

export default class index extends Component {
    clickHandler = (event) => {
        const catId = event.target.id;
        this.props.detailHandler(catId);
        this.props.changePage(2);
    };
    getRandomIdx = (min, max) => {
        return Math.floor(Math.random() * (max - min + 2) + min);
    };
    render() {
        const { theme, randomCats } = this.props;
        const randomidx = this.getRandomIdx(0, 6);
        const car = randomCats[randomidx];
        return (
            <div className={`card ${theme}__card`}>
                <div className="card__img">
                    <img src={car.img} alt={car.carName} />
                </div>
                <h3 className="card__title">{car.carName}</h3>
                <p>{car.description}</p>
                <a
                    className={`card__button ${theme}__button`}
                    href="#"
                    id={car.detailIdx}
                    onClick={this.clickHandler}
                >
                    Read More
                </a>
            </div>
        );
    }
}
