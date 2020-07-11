import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./index";

it("should be a HTML header", () => {
  render(<Header />);

  screen.getByRole("banner");
});

it("should represent a logo", () => {
  render(<Header />);

  screen.getByRole("heading", { name: "TEST SPA app" });
});
