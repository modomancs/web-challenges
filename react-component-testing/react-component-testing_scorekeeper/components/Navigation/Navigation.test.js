import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />);
  const playButton = screen.getByRole("link", {
    name: "Play",
  });
  const historyButton = screen.getByRole("link", {
    name: "History",
  });
  expect(playButton).toBeInTheDocument();
  expect(historyButton).toBeInTheDocument();
});
