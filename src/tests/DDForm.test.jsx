import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import DDForm from "../components/DDForm";

test("renders input fields and convert button", () => {
  render(<DDForm onConvert={jest.fn()} />);
  expect(screen.getByLabelText(/latitude/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/longitude/i)).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /convert to dms/i })
  ).toBeInTheDocument();
});

test("validates decimal degree format and shows error message", () => {
  render(<DDForm onConvert={jest.fn()} />);
  fireEvent.change(screen.getByLabelText(/latitude/i), {
    target: { value: "invalid" },
  });
  fireEvent.click(screen.getByRole("button", { name: /convert to dms/i }));
  expect(screen.getByText(/invalid format/i)).toBeInTheDocument();
});

test("converts valid DD to DMS and calls onConvert", () => {
  const onConvert = jest.fn();
  render(<DDForm onConvert={onConvert} />);
  fireEvent.change(screen.getByLabelText(/latitude/i), {
    target: { value: "40.446" },
  });
  fireEvent.change(screen.getByLabelText(/longitude/i), {
    target: { value: "-79.976" },
  });
  fireEvent.click(screen.getByRole("button", { name: /convert to dms/i }));
  expect(onConvert).toHaveBeenCalled();
});
