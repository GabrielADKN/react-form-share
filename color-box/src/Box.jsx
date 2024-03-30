import React from "react";

export default function Box({ color, width, height, removeBox, id }) {
    return (
        <div style={{ backgroundColor: color, width: `${width}px`, height: `${height}px`, position: 'relative' }}>
            <button
                onClick={() => removeBox(id)}
                style={{ position: "absolute", top: "5px", right: "5px" }}
            >
                X
            </button>
        </div>
    );
}
