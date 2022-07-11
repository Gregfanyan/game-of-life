import React, { FunctionComponent } from "react";

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

  return (
    <>
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
      <button onClick={() => setGrid(randomGrid())}>Reset</button>
      <button onClick={() => setGrid(generateEmptyGrid)}>Clear</button>
    </>
  );
};

export default PlayerControls;
