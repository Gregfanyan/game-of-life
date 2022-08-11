import { FunctionComponent } from "react";
import { GridProps } from "../../utils/types";
import styles from "./GameBoard.module.css";
const GameBoard: FunctionComponent<{
  colIndex: number;
  rowIndex: number;
  setGrid: React.Dispatch<React.SetStateAction<GridProps>>;
  grid: GridProps;
}> = ({ setGrid, grid, colIndex, rowIndex }) => {
  const startFromRandomCellHandleClick = () => {
    let cloneGrid = [...grid];
    cloneGrid[rowIndex][colIndex] = grid[rowIndex][colIndex] ? 0 : 1;
    setGrid(cloneGrid);
  };

  const cellBackGroundColor = grid[rowIndex][colIndex] ? "#F4EE3B" : "#B3B3B3";

  return (
    <div
      className={styles.cell}
      onClick={startFromRandomCellHandleClick}
      style={{
        backgroundColor: cellBackGroundColor,
      }}
    />
  );
};

export default GameBoard;
