import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";
const handleCreateGame = jest.fn();
jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm onCreateGame={() => {}} />);
  const firstInput = screen.getByRole("textbox", { name: "Name of game" });
  expect(firstInput).toBeInTheDocument();
  const secondInput = screen.getByRole("textbox", {
    name: "Player names, separated by comma",
  });
  expect(secondInput).toBeInTheDocument();
  const buttonTest = screen.getByRole("button", { name: "Create game" });
  expect(buttonTest).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm onCreateGame={() => {}} />);
  const form = screen.getByRole("form", {
    name: "formHeader",
  });
  expect(form).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  render(<GameForm onCreateGame={handleCreateGame} />);
  const user = userEvent.setup();
  const firstInput = screen.getByRole("textbox", { name: "Name of game" });
  expect(firstInput).toBeInTheDocument();
  const secondInput = screen.getByRole("textbox", {
    name: "Player names, separated by comma",
  });
  const buttonTest = screen.getByRole("button", { name: "Create game" });
  await user.type(firstInput, "Football");
  await user.type(secondInput, "Elisa, Juli");
  await user.click(buttonTest);
  const expectedOutput = {
    nameOfGame: "Football",
    playerNames: ["Elisa", "Juli"],
  };
  expect(handleCreateGame).toHaveBeenCalledWith(expectedOutput);
});

test("does not submit form if one input field is left empty", async () => {
  render(<GameForm onCreateGame={handleCreateGame} />);
  const user = userEvent.setup();
  const firstInput = screen.getByRole("textbox", { name: "Name of game" });
  expect(firstInput).toBeInTheDocument();
  const secondInput = screen.getByRole("textbox", {
    name: "Player names, separated by comma",
  });
  const buttonTest = screen.getByRole("button", { name: "Create game" });
  await user.type(firstInput, "Football");
  // await user.type(secondInput, "Elisa, Juli");
  await user.click(buttonTest);
  const expectedOutput = {
    nameOfGame: "Football",
    playerNames: ["Elisa", "Juli"],
  };
  expect(handleCreateGame).not.toHaveBeenCalled();
});
