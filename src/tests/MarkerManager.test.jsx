import React from "react";
import { render } from "@testing-library/react";
import MarkerManager from "../components/MarkerManager";

test("MarkerManager renders without crashing", () => {
  render(<MarkerManager />);
  expect(screen.getByText("Marker Manager")).toBeInTheDocument();
});
