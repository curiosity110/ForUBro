import { useState } from "react";
import "./styles.css";
import Cell from "../Cell";

const Grid = () => {
    const [colors, setColors] = useState([]);

    const createRandomColorValue = () => {
        return Math.floor(Math.random() * 256);
    };

    const createRandomRGBValue = () => {
        const red = createRandomColorValue();
        const green = createRandomColorValue();
        const blue = createRandomColorValue();
    return `rgb(${red},${green},${blue})`;
    };

    const createCells = () => {
    const newColors = [];
    for (let i = 0; i < 25; i++) {
        // Assigning an id over every iteration to not use the index directly
        const id = `${i}`;
        const color = createRandomRGBValue();
    
        newColors.push({id, color});
    }
    setColors(newColors);
    };

    const startDancefloor = () => {
        setInterval(createCells, 500)
    }

    return (

    <main>
        {/* Button to trigger the first rendering */}
        <div className="button-container">
            <button className="button" onClick={startDancefloor}>Start Dancing</button>
        </div>
        <div className="dancefloor">
            {colors.map((cell) => (
            <Cell key={cell.id} color={cell.color} />
        
        ))}
        </div>
    </main>
    );
};

export default Grid;