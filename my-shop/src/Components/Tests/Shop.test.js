import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Shop from "../Products/Shop";
import { MemoryRouter } from "react-router-dom";

test("renders product page", () => {
  const { fragment } = render(
    <MemoryRouter>
      <Shop />
    </MemoryRouter>
  );
  expect(fragment).toMatchSnapshot();
});
