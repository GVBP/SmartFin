import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import {
  ChartContainer,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";

const mockPayload = [
  {
    name: "Series 1",
    value: 123,
    dataKey: "series1",
    payload: { fill: "#ff0000" },
  },
  {
    name: "Series 2",
    value: 456,
    dataKey: "series2",
    payload: { fill: "#00ff00" },
  },
];

const mockConfig = {
  series1: { label: "Series 1", color: "#ff0000" },
  series2: { label: "Series 2", color: "#00ff00" },
};

describe("ChartTooltipContent", () => {
  it("should not render if `active` is false", () => {
    render(
      <ChartContainer config={mockConfig}>
        <ChartTooltipContent active={false} payload={mockPayload} />
      </ChartContainer>,
    );

    expect(screen.queryByText("Custom Label")).not.toBeInTheDocument();
  });
});
