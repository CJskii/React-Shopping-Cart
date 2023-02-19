import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import ContactUs from "../ContactUs";
import App from "../../App";

test("renders contact us page", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <ContactUs />
    </MemoryRouter>
  );

  const contact = getByTestId("contactus");
  expect(contact).toBeInTheDocument();
});

test("user navigate to contact page", async () => {
  const app = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const link = screen.getByText("Contact us");
  userEvent.click(link);
  const contact = screen.getByTestId("contactus");

  expect(contact).toBeInTheDocument();
});
