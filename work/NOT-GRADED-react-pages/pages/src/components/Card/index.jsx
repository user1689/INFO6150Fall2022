import React, { Component } from "react";

import './index.css'

export default class index extends Component {
    clickHandler = () => {
        this.props.changePage(3);
    }
    render() {
        return (
            <div className="card">
                <div className="card__img">
                    <img
                        src="http://placekitten.com/249/249"
                        alt="Image of American shorthair leopard"
                    />
                </div>
                <h3 className="card__title">Russian blue kitty</h3>
                <p>
                    Give attitude. Bury the poop bury it deep need to check on
                    human, have not seen in an hour might be dead oh look, human
                    is alive, hiss at human, feed me hide at bottom of staircase
                    to trip human claw drapes, but spend six hours per day
                    washing, but still have a crusty butthole and fooled again
                    thinking the dog likes me murr i hate humans they are so
                    annoying. Taco cat backwards spells taco cat under the bed,
                    and mrow tickle my belly at your own peril i will pester for
                    food when you're in the kitchen even if it's salad.
                </p>
                <a className="card__button" href="#" onClick={this.clickHandler}>
                    Read More
                </a>
            </div>
        );
    }
}
