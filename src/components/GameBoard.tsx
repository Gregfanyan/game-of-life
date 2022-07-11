import React, { FunctionComponent } from "react";

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
  );
};

export default GameBoard;
