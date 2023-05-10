import { memo } from "react";

const style = {
    height : "200px",
    backgroundColor : "wheat",
    padding : "8px"
};

export const Child4 = memo(() => {
    console.log("Child4 Rendering");

    return (
        <div style={style}>
            <p>Chil4</p>
        </div>
    );
});