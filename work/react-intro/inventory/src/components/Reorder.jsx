import React from "react";

import "./index.css";

export default function Reorder(props) {
    const { onReorder } = props;
    return (
        <div>
            <input
                className="reorder__button"
                type="button"
                value="Reorder"
                onClick={onReorder}
            />
        </div>
    );
}
