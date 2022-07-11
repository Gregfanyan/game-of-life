import React, { useState } from "react";
import "./App.css";

const numOfRows = 25;
const numOfCols = 35;

const randomGrid = () => {
  const grid = [];
  for (let i = 0; i < numOfRows; i++) {
    const row = [];
    for (let j = 0; j < numOfCols; j++) {
      row.push(Math.floor(Math.random() * 2));
    }
    grid.push(row);
  }
  return grid;
};

function App() {
  const [grid, setGrid] = useState<number[][]>(randomGrid());
  console.log("grid", grid);
  let newGrid = [...grid];
  console.log("newGrid", newGrid);
  return (
    <>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        Game of Life
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numOfCols},  20px) `,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {grid &&
          grid.map((rows, rowIndex) =>
            rows.map((col, colIndex) => {
              return (
                <div
                  onClick={() => {
                    let cloneGrid = [...grid];
                    cloneGrid[rowIndex][colIndex] = grid[rowIndex][colIndex]
                      ? 0
                      : 1;
                    setGrid(cloneGrid);
                  }}
                  key={`${rowIndex}-${colIndex}`}
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: grid[rowIndex][colIndex]
                      ? "#13d626"
                      : undefined,
                    border: "1px solid #595959",
                  }}
                />
              );
            })
          )}
      </div>
    </>
  );
}

export default App;
