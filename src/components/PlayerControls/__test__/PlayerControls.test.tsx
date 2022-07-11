import React from "react";
import { render, screen } from "@testing-library/react";
import PlayerControls from "../index";

test("renders learn react link", () => {
  const mockedFunction = jest.fn();

  render(
    <PlayerControls
      setIsStart={mockedFunction}
      isStart={false}
      startRef={{ current: false }}
      grid={[[2], [5]]}
      runGame={mockedFunction}
      randomGrid={mockedFunction}
      generateEmptyGrid={mockedFunction}
      setGrid={mockedFunction}
    />
  );
  const playButton = screen.getByRole("button", { name: /play/i });
  expect(playButton).toBeInTheDocument();
});
