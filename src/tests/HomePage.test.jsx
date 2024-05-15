import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "../pages/HomePage";

test("HomePage renders without crashing", () => {
  render(<HomePage />);
  expect(screen.getByText("Coordinate Converter")).toBeInTheDocument();
});
