import React, { useState, useCallback, useRef } from "react";
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

const positions = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

function App() {
  const [grid, setGrid] = useState<number[][]>(randomGrid());
  const [isStart, setIsStart] = useState<boolean>(false);

  const startRef = useRef(isStart);
  startRef.current = isStart;

  function runGame(grid: number[][]) {
    if (!startRef.current) {
      return;
    }
    setGrid((g) => {
      const next = g.map((row, rowIndex) => {
        return row.map((cell, cellIndex) => {
          let sum = 0;
          positions.forEach((position) => {
            const rowPosition = rowIndex + position[0];
            const cellPosition = cellIndex + position[1];
            if (
              rowPosition >= 0 &&
              rowPosition < numOfRows &&
              cellPosition >= 0 &&
              cellPosition < numOfCols
            ) {
              sum += g[rowPosition][cellPosition];
            }
          });
          if (sum < 2 || sum > 3) {
            return 0;
          }
          if (sum === 3) {
            return 1;
          }
          return g[rowIndex][cellIndex];
        });
      });
      return next;
    });
  }
  const startButtonTitle = isStart ? "Stop" : "Play";
  return (
    <>
      <Header />
      <main>
        <button
          onClick={() => {
            setIsStart(!isStart);
            if (!isStart) {
              startRef.current = true;
            }
            setInterval(() => {
              runGame(grid);
            }, 1000);
          }}
        >
          {startButtonTitle}
        </button>
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
              rows.map((col, colIndex) => (
                <GameBoard
                  rowIndex={rowIndex}
                  colIndex={colIndex}
                  grid={grid}
                  setGrid={setGrid}
                />
              ))
            )}
        </div>
      </main>
    </>
  );
}

export default App;
