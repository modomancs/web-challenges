import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";
const DecreasePlayerScore = jest.fn();
const IncreasePlayerScore = jest.fn();

test("renders player information and two buttons", () => {
  render(
    <Player
      name="test"
      score="0"
      onDecreasePlayerScore={() => {}}
      onIncreasePlayerScore={() => {}}
    />
  );
  const buttonsTest = screen.getAllByRole("button");
  expect(buttonsTest).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
  render(
    <Player
      name="test"
      score="0"
      onDecreasePlayerScore={DecreasePlayerScore}
      onIncreasePlayerScore={IncreasePlayerScore}
    />
  );
  const increaseScore = screen.getByRole("button", { name: "Increase Score" });
  const decreaseScore = screen.getByRole("button", { name: "Decrease Score" });
  await userEvent.click(increaseScore);
  await userEvent.click(decreaseScore);
  expect(IncreasePlayerScore).toHaveBeenCalledTimes(1);
  expect(DecreasePlayerScore).toHaveBeenCalledTimes(1);
});
