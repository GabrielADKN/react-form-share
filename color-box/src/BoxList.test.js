import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Box from "./Box";
import BoxList from "./BoxList";

it("renders without crashing", () => {
    render(<BoxList />);
})

it("matches snapshot", () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
})

it("Should add a new box", () => {
    const { getByText, getByLabelText } = render(<BoxList />);

    const colorInput = getByLabelText("Color");
    const widthInput = getByLabelText("Width");
    const heightInput = getByLabelText("Height");
    const button = getByText("Add Box");

    expect(queryByText("X")).not.toBeInTheDocument();
    fireEvent.change(colorInput, { target: { value: "red" } });
    fireEvent.change(widthInput, { target: { value: 100 } });
    fireEvent.change(heightInput, { target: { value: 100 } });
    fireEvent.click(button);

    expect(queryByText("X")).toBeInTheDocument();

})