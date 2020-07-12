import React from "react";
import { render, screen } from "@testing-library/react";
import { Select, ISelectProps } from "./index";

const options = [
  { label: "Label 1", value: 1 },
  { label: "Label 2", value: 2 },
];

const setup = (props: ISelectProps) => render(<Select {...props} />);

it("should be an HTML select", () => {
  setup();

  screen.getByRole("combobox");
});

it("should be empty by default", () => {
  setup();

  expect(screen.queryAllByRole("option")).toHaveLength(0);
});

it("should represent options", () => {
  setup({ options });

  const optionsEls = screen.getAllByRole("option");

  optionsEls.forEach((el, index) => {
    expect(el.getAttribute("value")).toBe(String(options[index].value));
    expect(el.innerHTML).toBe(options[index].label);
  });

  expect(optionsEls).toHaveLength(options.length);
});

it("should be controlled field", () => {
  const onChange = jest.fn();
  setup({ options, value: options[1].value, onChange });

  expect(screen.getAllByRole("option")[1].selected).toBeTruthy();
});
