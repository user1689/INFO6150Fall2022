import React from "react";

import Reorder from "./components/Reorder";

import "./index.css";

export default function App() {
    const [count, setCount] = React.useState(0);
    const plusHandler = () => {
        setCount(count + 1);
    };
    const minusHandler = () => {
        setCount(count - 1);
    };
    const onReorder = () => {
        setCount(5);
    };
    return (
        <div id="app">
            <span>{count}</span>
            <input type="button" value="+" onClick={plusHandler} />
            <input
                type="button"
                value="-"
                disabled={!count} // defaultValue
                onClick={minusHandler}
            />
            {count === 0 ? <Reorder onReorder={onReorder} /> : <div></div>}
        </div>
    );
}
