import React, { useState, useCallback, useRef, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import GameBoard from "./components/GameBoard";
import PlayerControls from "./components/PlayerControls";

const numOfRows = 25;
const numOfCols = 35;

const randomGrid = () =>
  Array.from({ length: numOfRows }, () =>
    Array.from({ length: numOfCols }, () => Math.floor(Math.random() * 2))
  );

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
  const [grid, setGrid] = useState<number[][]>([]);
  const [isStart, setIsStart] = useState<boolean>(false);

  const startRef = useRef(isStart);
  startRef.current = isStart;

  useEffect(() => {
    setGrid(randomGrid());
  }, []);

  const runGame = useCallback((grid: number[][]) => {
    if (!startRef.current) {
      return;
    }
    setGrid(randomGrid());
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
  }, []);

  const generateEmptyGrid = (): number[][] => {
    const rows = [];
    for (let i = 0; i < numOfRows; i++) {
      rows.push(Array.from(Array(numOfCols), () => 0));
    }
    return rows;
  };

  return (
    <>
      <Header />
      <main>
        <PlayerControls
          setIsStart={setIsStart}
          isStart={isStart}
          startRef={startRef}
          grid={grid}
          runGame={runGame}
          setGrid={setGrid}
          randomGrid={randomGrid}
          generateEmptyGrid={generateEmptyGrid}
        />

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
