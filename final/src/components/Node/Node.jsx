import React, { Component } from "react";

import "./index.css";

export default class Node extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { x, y, isWall, onMouseDownHandler, onMouseUpHandler, onMouseEnterHandler, startNodeX, startNodeY, endNodeX, endNodeY, dragClassName} = this.props;
        
        const extraClassName =
                x === startNodeX && y === startNodeY
                ? "node__start"
                : x === endNodeX && y === endNodeY
                ? "node__end"
                : isWall !== undefined && isWall !== null && isWall
                ? "node__wall"
                : "";
        return (
            <div
                id={`node__${x}__${y}`}
                className={`node ${extraClassName} ${dragClassName}`}
                onMouseDown={(x === startNodeX && y === startNodeY) || (x === endNodeX && y === endNodeY) ? null : () => onMouseDownHandler(x, y)}
                onMouseUp={() => onMouseUpHandler(x, y)}
                onMouseEnter={() => onMouseEnterHandler(x, y)}
                draggable={(x === startNodeX && y === startNodeY) || (x === endNodeX && y === endNodeY) ? "true" : "false"}
                alt="node"
            ></div>
        );
    }
}
