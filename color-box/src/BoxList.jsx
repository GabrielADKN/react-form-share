import React, { useState } from "react";
import Box from "./Box";
import NewBox from "./NewBoxForm";

export default function BoxList() {
    const INITIAL_STATE = [
        { id: 1, color: 'red', width: 100, height: 100 },
        { id: 2, color: 'green', width: 200, height: 200 },
        { id: 3, color: 'blue', width: 300, height: 300 }
    ]

    const [boxes, setBoxes] = useState(INITIAL_STATE );

    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes,{ ...newBox, id:boxes.length+1}]);
    };

    const removeBox = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    };

    return (
        <div>
            <NewBox addBox={addBox} />
            <hr />
            <div>
                {boxes.map(({ color, width, height, id }) =>
                    <Box
                        key={id}
                        id={id}
                        color={color}
                        width={width}
                        height={height}
                        removeBox={removeBox}
                    />
                )}
            </div>
        </div>
    );
}
