import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Box from "./Box";

test("renders a box", () => {
    const { getByTestId } = render(<Box />);
    const box = getByTestId("box");
    expect(box).toBeInTheDocument();
})

test("renders a remove button", () => {
    const { getByText } = render(<Box />);
    const button = getByText("X");
    expect(button).toBeInTheDocument();
})

test("Snapshot", () => {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
})

test("clicking the remove button calls the removeBox function", () => {
    const removeBox = jest.fn();
    const { getByText } = render(<Box removeBox={removeBox} />);
    const button = getByText("X");
    fireEvent.click(button);
    expect(removeBox).toHaveBeenCalledTimes(1);
})