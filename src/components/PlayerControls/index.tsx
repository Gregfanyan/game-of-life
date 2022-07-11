import React, { FunctionComponent } from "react";
import style from "./PlayerControls.module.css";
const PlayerControls: FunctionComponent<{
  setIsStart: Function;
  isStart: boolean;
  startRef: React.MutableRefObject<boolean>;
  grid: number[][];
  setGrid: Function;
  runGame: (grid: number[][]) => void;
  randomGrid: any;
  generateEmptyGrid: Function;
}> = ({
  setIsStart,
  isStart,
  startRef,
  runGame,
  grid,
  setGrid,
  randomGrid,
  generateEmptyGrid,
}) => {
  const startButtonTitle = isStart ? "Stop" : "Play";
  console.log("startRef", startRef);
  return (
    <section className={style.button_wrapper}>
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
      <button onClick={() => setGrid(randomGrid())}>Random</button>
      <button
        onClick={() => {
          setIsStart(false);
          setGrid(generateEmptyGrid);
        }}
      >
        Clear
      </button>
    </section>
  );
};

export default PlayerControls;
