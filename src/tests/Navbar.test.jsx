import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";

test("opens and closes the mobile menu", () => {
  render(<Navbar />);
  fireEvent.click(screen.getByRole("button", { name: /open main menu/i }));
  fireEvent.click(screen.getByText(/about/i));
  expect(screen.queryByText(/about/i)).not.toBeVisible();
});
