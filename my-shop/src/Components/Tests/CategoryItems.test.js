import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";

test("renders miner category", () => {
  const app = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const link = screen.getByText("ASIC Miners");
  userEvent.click(link);

  expect(screen.getByTestId("cat header")).toBeInTheDocument();
});

test("renders GPU category", () => {
  const app = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const link = screen.getByText("Graphic Cards");
  userEvent.click(link);

  expect(screen.getByTestId("cat header")).toBeInTheDocument();
});

test("renders Gadget category", () => {
  const app = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const link = screen.getByText("Crypto Gadgets");
  userEvent.click(link);

  expect(screen.getByTestId("cat header")).toBeInTheDocument();
});
