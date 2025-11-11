import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";
const handleChange = jest.fn();

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input
      labelText="test"
      placeholder="test"
      name="test"
      value=""
      onChange={() => {}}
    />
  );
  const inputTest = screen.getByRole("textbox", {
    name: "test",
  });
  expect(inputTest).toHaveAttribute("placeholder", "test");
  expect(inputTest).toHaveAttribute("name", "test");
  // const labelTest = screen.getByRole("")
});

test("calls callback on every user input", async () => {
  render(
    <Input labelText="test" name="test" value="" onChange={handleChange} />
  );
  const onChangeTest = screen.getByRole("textbox", { name: "test" });
  await userEvent.type(onChangeTest, "h");
  expect(handleChange).toHaveBeenCalledTimes(1);
});
