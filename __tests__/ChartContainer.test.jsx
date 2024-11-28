import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { ChartContainer } from "@/app/_components/ui/chart";

describe("ChartContainer", () => {
  const mockConfig = {
    dataKey1: { label: "Label 1", color: "#ff0000" },
    dataKey2: {
      label: "Label 2",
      theme: { light: "#00ff00", dark: "#0000ff" },
    },
  };

  it("should render the container correctly", () => {
    render(
      <ChartContainer config={mockConfig}>
        <div>Chart content</div>
      </ChartContainer>,
    );

    expect(screen.getByText("Chart content")).toBeInTheDocument();
  });

  it("must apply the ID uniquely to the container", () => {
    const { container } = render(
      <ChartContainer config={mockConfig}>
        <div>Test Chart</div>
      </ChartContainer>,
    );

    const chartElement = container.querySelector("[data-chart]");
    expect(chartElement).toHaveAttribute("data-chart");
  });

  it("should render dynamic styles based on theme and color settings", () => {
    const { container } = render(
      <ChartContainer config={mockConfig}>
        <div>Stylish Graphic</div>
      </ChartContainer>,
    );

    const styleElement = container.querySelector("style");
    expect(styleElement).toBeInTheDocument();
    expect(styleElement?.innerHTML).toContain("--color-dataKey1: #ff0000;");
    expect(styleElement?.innerHTML).toContain("--color-dataKey2: #00ff00;");
  });
});
