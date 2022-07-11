import React, { FunctionComponent } from "react";
import styles from "./GameBoard.module.css";
const GameBoard: FunctionComponent<{
  setGrid: Function;
  grid: number[][];
  numOfCols: number;
}> = ({ setGrid, grid, numOfCols }) => {
  return (
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
                className={styles.row}
                onClick={() => {
                  let cloneGrid = [...grid];
                  cloneGrid[rowIndex][colIndex] = grid[rowIndex][colIndex]
                    ? 0
                    : 1;
                  setGrid(cloneGrid);
                }}
                key={`${rowIndex}-${colIndex}`}
                style={{
                  backgroundColor: grid[rowIndex][colIndex]
                    ? "#13d626"
                    : undefined,
                }}
              />
            );
          })
        )}
    </div>
  );
};

export default GameBoard;
