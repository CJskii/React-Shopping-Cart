import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import ShopCard from "../Products/ShopCard";

test("renders item card", () => {
  let name = "Graphic Cards";
  let item = { name: "name", description: "text" };
  const app = render(
    <MemoryRouter>
      <ShopCard name={name} item={item} />
    </MemoryRouter>
  );

  expect(screen.getByText("text")).toBeInTheDocument();
  expect(screen.getByText("name")).toBeInTheDocument();
});
