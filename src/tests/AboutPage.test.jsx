import React from "react";
import { render, screen } from "@testing-library/react";
import AboutPage from "../pages/AboutPage";

test("AboutPage renders without crashing", () => {
  const { getByText } = render(<AboutPage />);
  expect(getByText("About Coordinate Converter")).toBeInTheDocument();
});
