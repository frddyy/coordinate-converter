import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ConverterModal from "../components/ConverterModal";
import { MemoryRouter } from "react-router-dom";

describe("ConverterModal", () => {
  it("opens modal when mapCoordinates are provided", () => {
    const onAddToMap = jest.fn();
    render(
      <MemoryRouter>
        <ConverterModal onAddToMap={onAddToMap} />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByLabelText(/latitude/i)).toBeInTheDocument();
  });

  it("closes modal on outside click", () => {
    const onAddToMap = jest.fn();
    render(
      <MemoryRouter>
        <ConverterModal onAddToMap={onAddToMap} />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByLabelText(/latitude/i));
    fireEvent.click(document);
    expect(screen.queryByLabelText(/latitude/i)).toBeNull();
  });

  it("converts DMS to DD and adds to map", () => {
    const onAddToMap = jest.fn();
    render(
      <MemoryRouter>
        <ConverterModal onAddToMap={onAddToMap} />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByRole("button"));
    fireEvent.change(screen.getByLabelText(/latitude/i), {
      target: { value: "40° 26' 46\" N" },
    });
    fireEvent.change(screen.getByLabelText(/longitude/i), {
      target: { value: "79° 58' 36\" W" },
    });
    fireEvent.click(screen.getByRole("button", { name: /convert to dd/i }));
    expect(onAddToMap).toHaveBeenCalled();
  });
});
