import React, { Component } from "react";

import "./index.css";

import Node from "../Node/Node";
import { dijkstra, getShortestPath } from "../../algorithms/myDijkstra";
import { mazeGenerator } from "../../algorithms/myMazeGenerator";

export default class Maze extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: [],
            startIsPressed: false,
            mouseIsPressed: false,
            startNodeX: START_NODE_ROW,
            startNodeY: START_NODE_COL,
            endNodeX: END_NODE_ROW,
            endNodeY: END_NODE_COL,
            errorForDrag: false,
        };
        this.selected = null;
        this.startTarget = null;
        this.endTarget = null;
        this.previousVisited = null;
    }
    componentDidMount() {
        const { startNodeX, startNodeY, endNodeX, endNodeY } = this.state;
        const grid = generateGrid(startNodeX, startNodeY, endNodeX, endNodeY);
        this.setState({ grid: grid });
    }
    generateAnimation = (visitedNodesInOrder, shortestPath) => {
        const { grid } = this.state;
        for (let i = 0; i < visitedNodesInOrder.length; i++) {
            if (i === visitedNodesInOrder.length - 1) {
                setTimeout(() => {
                    this.generateShortestPath(shortestPath);
                }, 10 * i);
                return;
            }
            setTimeout(() => {
                const node = visitedNodesInOrder[i];
                const { x, y } = node;
                const newGrid = getNewGridWithNewStyle(
                    grid,
                    x,
                    y,
                    "node__visited"
                );
                this.setState({ grid: newGrid });
            }, 10 * i);
        }
    };
    generateShortestPath = (shortestPath) => {
        const { grid } = this.state;
        for (let i = 0; i < shortestPath.length; i++) {
            setTimeout(() => {
                const node = shortestPath[i];
                const { x, y } = node;
                const newGrid = getNewGridWithNewStyle(
                    grid,
                    x,
                    y,
                    "node__shortest__path"
                );
                this.setState({ grid: newGrid });
            }, 10 * i);
        }
    };
    visualizeDijkstra = () => {
        this.setState({ errorForDrag: false });
        const { startNodeX, startNodeY, endNodeX, endNodeY } = this.state;
        const { grid } = this.state;
        const startNode = grid[startNodeX][startNodeY];
        const endNode = grid[endNodeX][endNodeY];

        const tmpArr = dijkstra(grid, startNode, endNode);
        const visitedNodesInOrder = tmpArr[0];
        this.previousVisited = tmpArr[1];
        const shortestPath = getShortestPath(endNode);

        visitedNodesInOrder.shift();
        visitedNodesInOrder.pop();
        shortestPath.shift();
        shortestPath.pop();

        // clean wall
        for (let childs of grid) {
            for (let child of childs) {
                // cleaning previousNode in order to avoid infinite loop
                child.previousNode = null;
            }
        }
        this.generateAnimation(visitedNodesInOrder, shortestPath);
    };
    onMouseDownHandler = (x, y) => {
        const { grid } = this.state;
        const newGrid = getNewGridWithWallToggled(grid, x, y);
        this.setState({ grid: newGrid, mouseIsPressed: true });
    };
    onMouseUpHandler = (x, y) => {
        this.setState({ mouseIsPressed: false });
    };
    onMouseEnterHandler = (x, y) => {
        const { startNodeX, startNodeY, endNodeX, endNodeY } = this.state;
        const { grid, mouseIsPressed } = this.state;
        if (!mouseIsPressed) return;
        const newGrid = getNewGridWithWallToggled(
            grid,
            x,
            y,
            startNodeX,
            startNodeY,
            endNodeX,
            endNodeY
        );
        this.setState({ grid: newGrid, mouseIsPressed: true });
    };
    dragEnd = () => {
        const { grid } = this.state;
        if (this.startTarget !== null && this.startTarget !== undefined) {
            const { startNodeX, startNodeY, endNodeX, endNodeY } = this.state;
            const tmpVal = this.startTarget.id.split("__");
            const newStartX = parseInt(tmpVal[1]),
                newStartY = parseInt(tmpVal[2]);

            if (newStartX === endNodeX && newStartY === endNodeY) {
                this.setState({
                    startNodeX: startNodeX,
                    startNodeY: startNodeY,
                });
                const newGrid = getNewGridWithNewStyle(
                    grid,
                    startNodeX,
                    startNodeY,
                    "start__dragend__error__color"
                );
                this.setState({ grid: newGrid });
                this.startTarget = null;
                this.setState({ errorForDrag: true });
                return;
            }

            const newGrid = getNewGridWithNewStyle(
                grid,
                newStartX,
                newStartY,
                "start__dragend__color"
            );
            this.setState({ grid: newGrid });
            this.setState({ startNodeX: newStartX, startNodeY: newStartY });
            this.startTarget = null;
        } else if (this.endTarget !== null && this.endTarget !== undefined) {
            const { startNodeX, startNodeY, endNodeX, endNodeY } = this.state;
            const tmpVal = this.endTarget.id.split("__");
            const newEndX = parseInt(tmpVal[1]),
                newEndY = parseInt(tmpVal[2]);

            if (newEndX === startNodeX && newEndY === startNodeY) {
                this.setState({ endNodeX: endNodeX, endNodeY: endNodeY });
                this.endTarget = null;
                const newGrid = getNewGridWithNewStyle(
                    grid,
                    endNodeX,
                    endNodeY,
                    "end__dragend__error__color"
                );
                this.setState({ grid: newGrid, errorForDrag: true });
                return;
            }

            // The logic here can be used if we want to avoid moving the origin or arrival point to an already visited location
            const newGrid = getNewGridWithNewStyle(
                grid,
                newEndX,
                newEndY,
                "end__dragend__error__color"
            );
            this.setState({ grid: newGrid });
            this.setState({ endNodeX: newEndX, endNodeY: newEndY });
            this.endTarget = null;
        }

        this.selected = null;
    };
    dragEnter = (e) => {
        const { grid, startNodeX, startNodeY, endNodeX, endNodeY } = this.state;
        const tmpVal = e.target.id.split("__");
        const x = parseInt(tmpVal[1]),
            y = parseInt(tmpVal[2]);
        const node = grid[x][y];
        node.isWall = false;

        if (this.startTarget !== null && this.startTarget !== undefined) {
            this.startTarget = e.target;
            if (this.startTarget !== null && x === endNodeX && y === endNodeY)
                return;
            const newGrid = getNewGridWithNewStyle(
                grid,
                x,
                y,
                "start__dragenter__color"
            );
            this.setState({ grid: newGrid });
        } else if (this.endTarget !== null && this.endTarget !== undefined) {
            this.endTarget = e.target;
            if (this.endTarget !== null && x === startNodeX && y === startNodeY)
                return;
            const newGrid = getNewGridWithNewStyle(
                grid,
                x,
                y,
                "end__dragenter__color"
            );
            this.setState({ grid: newGrid });
        }
    };
    dragLeave = (e) => {
        const { grid, startNodeX, startNodeY, endNodeX, endNodeY } = this.state;
        const tmpVal = e.target.id.split("__");
        const x = parseInt(tmpVal[1]),
            y = parseInt(tmpVal[2]);
        if (this.startTarget !== null && x === endNodeX && y === endNodeY)
            return;
        if (this.endTarget !== null && x === startNodeX && y === startNodeY)
            return;
        const newGird = getNewGridWithNewStyle(grid, x, y, "leave__color");
        this.setState({ grid: newGird });
    };
    dragstart_handler = (ev) => {
        var img = new Image();
        img.src = "/images/vera-barus--TMUaDKmsPk-unsplash.jpg";
        ev.dataTransfer.setDragImage(img, 0, 0);
    };
    dragStart = (e) => {
        this.setState({ errorForDrag: false });
        const { grid, startNodeX, startNodeY, endNodeX, endNodeY } = this.state;
        const tmpVal = e.target.id.split("__");
        this.dragstart_handler(e);
        if (
            parseInt(tmpVal[1]) === startNodeX &&
            parseInt(tmpVal[2]) === startNodeY
        ) {
            this.startTarget = e.target;
            setTimeout(() => {
                const newGrid = getNewGridWithNewStyle(
                    grid,
                    tmpVal[1],
                    tmpVal[2],
                    "dragstart__color"
                );
                this.setState({ grid, newGrid });
            }, 0);
        } else if (
            parseInt(tmpVal[1]) === endNodeX &&
            parseInt(tmpVal[2]) === endNodeY
        ) {
            this.endTarget = e.target;
            setTimeout(() => {
                const newGrid = getNewGridWithNewStyle(
                    grid,
                    tmpVal[1],
                    tmpVal[2],
                    "dragstart__color"
                );
                this.setState({ grid, newGrid });
            }, 0);
        }
    };
    resetMaze = () => {
        this.setState({ errorForDrag: false });
        this.previousVisited = null;
        // clean visited
        // clean wall
        const { grid } = this.state;
        const newGrid = grid.slice();
        for (let childs of newGrid) {
            for (let child of childs) {
                // cleaning previousNode in order to avoid infinite loop
                child.previousNode = null;
                if (!child.isStart || !child.isEnd) {
                    child.isWall = false;
                    child.dragClassName = null;
                }
            }
        }
        this.setState({ grid: newGrid });
    };
    generateMaze = () => {
        this.resetMaze();
        const { startNodeX, startNodeY, endNodeX, endNodeY } = this.state;
        const { grid } = this.state;
        const startNode = grid[startNodeX][startNodeY];
        const endNode = grid[endNodeX][endNodeY];

        const tmpGrid = mazeGenerator(grid, startNode, endNode);

        const newGrid = grid.slice();
        for (let i = 0; i < tmpGrid.length; i++) {
            for (let j = 0; j < tmpGrid[0].length; j++) {
                if (tmpGrid[i][j] === 1) {
                    const node = newGrid[i][j];
                    const newNode = {
                        ...node,
                        isWall: true,
                        dragClassName: "wall",
                    };
                    newGrid[i][j] = newNode;
                }
            }
        }
        this.setState({ grid: newGrid });
    };
    render() {
        const { theme } = this.props;
        const {
            grid,
            startNodeX,
            startNodeY,
            endNodeX,
            endNodeY,
            errorForDrag,
        } = this.state;
        return (
            <div className={`${theme}__maze__container`}>
                <div className="maze__annotations">
                    <div className="maze__start" alt="startCat"></div>
                    <span className={`${theme}__maze__start__name`}>
                        startCat
                    </span>
                    <div className="maze__end" alt="endCat"></div>
                    <span className={`${theme}__maze__end__name`}>endCat</span>
                    <div className="maze__wall" alt="wall"></div>
                    <span className={`${theme}__maze__wall__name`}>Wall</span>
                    <div className="maze__unvisited" alt="unvisited"></div>
                    <span className={`${theme}__maze__unvisited__name`}>
                        Unvisited
                    </span>
                </div>
                <div className="maze__buttons">
                    <button
                        className="maze__button"
                        onClick={this.visualizeDijkstra}
                    >
                        Start
                    </button>
                    <button className="maze__button" onClick={this.resetMaze}>
                        Reset Maze
                    </button>
                    <button
                        className="maze__button"
                        onClick={this.generateMaze}
                    >
                        Generate Maze
                    </button>
                </div>
                <div
                    className="maze__content"
                    onMouseDown={this.getIdx}
                    onDragEnd={() => this.dragEnd()}
                    onDragEnter={(event) => this.dragEnter(event)}
                    onDragStart={(event) => this.dragStart(event)}
                    onDragLeave={(event) => this.dragLeave(event)}
                >
                    {grid.map((row, rowIdx) => {
                        return (
                            <div className="maze__row" key={rowIdx}>
                                {row.map((node, nodeIdx) => {
                                    const {
                                        isVisited,
                                        x,
                                        y,
                                        isWall,
                                        mouseIsPressed,
                                        dragClassName,
                                    } = node;
                                    return (
                                        <Node
                                            x={x}
                                            y={y}
                                            key={nodeIdx}
                                            isStart={
                                                x === startNodeX &&
                                                y === startNodeY
                                                    ? true
                                                    : false
                                            }
                                            isEnd={
                                                x === endNodeX && y === endNodeY
                                                    ? true
                                                    : false
                                            }
                                            isVisited={isVisited}
                                            isWall={isWall}
                                            startNodeX={startNodeX}
                                            startNodeY={startNodeY}
                                            endNodeX={endNodeX}
                                            endNodeY={endNodeY}
                                            onMouseDownHandler={
                                                this.onMouseDownHandler
                                            }
                                            onMouseUpHandler={
                                                this.onMouseUpHandler
                                            }
                                            onMouseEnterHandler={
                                                this.onMouseEnterHandler
                                            }
                                            mouseIsPressed={mouseIsPressed}
                                            dragClassName={dragClassName}
                                        ></Node>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
                <span className="error error__center">
                    {errorForDrag === true
                        ? "Sorry, it is an invalid position for drag, please try another position again."
                        : null}
                    &nbsp;
                </span>
            </div>
        );
    }
}
const START_NODE_ROW = 1;
const START_NODE_COL = 1;
const END_NODE_ROW = 12;
const END_NODE_COL = 12;

const generateGrid = (startX, startY, endX, endY) => {
    const nodes = [];
    const row = 14;
    const col = 14;
    for (let i = 0; i < row; i++) {
        const currentRow = [];
        for (let j = 0; j < col; j++) {
            const currentNode = createNode(i, j, startX, startY, endX, endY);
            currentRow.push(currentNode);
        }
        nodes.push(currentRow);
    }
    return nodes;
};
const createNode = (x, y, startX, startY, endX, endY) => {
    return {
        x,
        y,
        isStart: false,
        isEnd: false,
        distance: Infinity,
        isVisited: false,
        isWall: false,
        previousNode: null,
        mouseIsPressed: false,
        dragClassName: null,
    };
};
const getNewGridWithWallToggled = (grid, x, y, startX, startY, endX, endY) => {
    const newGrid = grid.slice();
    const node = newGrid[x][y];
    const newNode = {
        ...node,
        isWall: true,
    };
    newGrid[x][y] = newNode;

    let newGridNewStyle = getNewGridWithNewStyle(newGrid, x, y, "wall");

    if (x === startX && y === startY) {
        newGridNewStyle = getNewGridWithNewStyle(
            newGrid,
            x,
            y,
            "start__dragenter__color"
        );
    }
    if (x === endX && y === endY) {
        newGridNewStyle = getNewGridWithNewStyle(
            newGrid,
            x,
            y,
            "end__dragenter__color"
        );
    }

    return newGridNewStyle;
};

const getNewGridWithNewStyle = (grid, x, y, dragClassName) => {
    const newGrid = grid.slice();
    const node = newGrid[x][y];
    const newNode = {
        ...node,
        dragClassName: dragClassName,
    };
    newGrid[x][y] = newNode;
    return newGrid;
};
