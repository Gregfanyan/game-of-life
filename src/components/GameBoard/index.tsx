import React, { FunctionComponent } from "react";
import styles from "./GameBoard.module.css";
const GameBoard: FunctionComponent<{
  colIndex: number;
  rowIndex: number;
  setGrid: Function;
  grid: number[][];
}> = ({ setGrid, grid, colIndex, rowIndex }) => {
  return (
    <div
      className={styles.row}
      onClick={() => {
        let cloneGrid = [...grid];
        cloneGrid[rowIndex][colIndex] = grid[rowIndex][colIndex] ? 0 : 1;
        setGrid(cloneGrid);
      }}
      key={`${rowIndex}-${colIndex}`}
      style={{
        backgroundColor: grid[rowIndex][colIndex] ? "#F4EE3B" : "#B3B3B3",
      }}
    />
  );
};

export default GameBoard;
