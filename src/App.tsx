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
  return (
    <>
      <Header />
      <GameBoard numOfCols={numOfCols} grid={grid} setGrid={setGrid} />
    </>
  );
}

export default App;
