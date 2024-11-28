import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { ChartContainer, ChartLegendContent } from "@/app/_components/ui/chart";

const mockPayload = [
  { value: "Legend 1", dataKey: "key1", color: "#ff0000" },
  { value: "Legend 2", dataKey: "key2", color: "#00ff00" },
];

const mockConfig = {
  key1: { label: "Custom Legend 1", icon: undefined },
  key2: { label: "Custom Legend 2", icon: undefined },
};

describe("ChartLegendContent", () => {
  it("should not render if `payload` is empty", () => {
    render(
      <ChartContainer config={mockConfig}>
        <ChartLegendContent payload={[]} />
      </ChartContainer>,
    );
    expect(screen.queryByText("Custom Legend 1")).not.toBeInTheDocument();
  });

  it("should render the legend items correctly", () => {
    render(
      <ChartContainer config={mockConfig}>
        <ChartLegendContent payload={mockPayload} />
      </ChartContainer>,
    );
    expect(screen.getByText("Custom Legend 1")).toBeInTheDocument();
    expect(screen.getByText("Custom Legend 2")).toBeInTheDocument();
  });
});
