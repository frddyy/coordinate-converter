import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import DMSForm from "../components/DMSForm";

test("renders input fields and convert button", () => {
  render(<DMSForm onConvert={jest.fn()} />);
  expect(screen.getByLabelText(/latitude/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/longitude/i)).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /convert to dd/i })
  ).toBeInTheDocument();
});

test("validates DMS format and shows error message", () => {
  render(<DMSForm onConvert={jest.fn()} />);
  fireEvent.change(screen.getByLabelText(/latitude/i), {
    target: { value: "invalid" },
  });
  fireEvent.click(screen.getByRole("button", { name: /convert to dd/i }));
  expect(screen.getByText(/invalid format/i)).toBeInTheDocument();
});

test("converts valid DMS to DD and calls onConvert", () => {
  const onConvert = jest.fn();
  render(<DMSForm onConvert={onConvert} />);
  fireEvent.change(screen.getByLabelText(/latitude/i), {
    target: { value: "40° 26' 46\" N" },
  });
  fireEvent.change(screen.getByLabelText(/longitude/i), {
    target: { value: "79° 58' 36\" W" },
  });
  fireEvent.click(screen.getByRole("button", { name: /convert to dd/i }));
  expect(onConvert).toHaveBeenCalled();
});
