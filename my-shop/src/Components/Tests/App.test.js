import { getByTestId, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../App";
import { MemoryRouter } from "react-router-dom";

describe("Render main components", () => {
  it("should render app", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const app = getByTestId("app");
    expect(app).toBeInTheDocument();
  });

  it("should render navbar", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const navbarElement = getByTestId("navbar");
    expect(navbarElement).toBeInTheDocument();
  });

  it("should render footer", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const footer = getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
});
