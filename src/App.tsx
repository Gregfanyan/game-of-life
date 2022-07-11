import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import GameBoard from "./components/GameBoard";

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
  const [isRunning, setIsRunning] = useState<boolean>(false);
  return (
    <>
      <Header />
      <main
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numOfCols},  20px) `,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {grid &&
          grid.map((rows, rowIndex) =>
            rows.map((col, colIndex) => (
              <GameBoard
                rowIndex={rowIndex}
                colIndex={colIndex}
                grid={grid}
                setGrid={setGrid}
                setIsRunning={setIsRunning}
                isRunning={isRunning}
              />
            ))
          )}
      </main>
    </>
  );
}

export default App;
