import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Shop from "../Products/Shop";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";

test("renders product page", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Shop />
    </MemoryRouter>
  );
  const shop = getByTestId("shop");
  expect(shop).toBeInTheDocument();
});

test("user navigate to products page", async () => {
  const app = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const link = screen.getByText("Products");
  userEvent.click(link);
  const contact = screen.getByTestId("shop");

  expect(screen.getByTestId("shop")).toBeInTheDocument();
});
