import React, { FunctionComponent } from "react";
import styles from "./GameBoard.module.css";
const GameBoard: FunctionComponent<{
  colIndex: any;
  rowIndex: any;
  setGrid: Function;
  grid: number[][];
  isRunning: boolean;
  setIsRunning: Function;
}> = ({ setGrid, grid, isRunning, setIsRunning, colIndex, rowIndex }) => {
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
