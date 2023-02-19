import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Shop from "../Products/Shop";
import { MemoryRouter } from "react-router-dom";
import ContactUs from "../ContactUs";

test("renders contact us page", () => {
  const { fragment } = render(
    <MemoryRouter>
      <ContactUs />
    </MemoryRouter>
  );

  expect(fragment).toMatchSnapshot();
});
