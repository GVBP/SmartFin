import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navbar from "@/app/_components/navbar";

describe("Navbar Component", () => {
  it("renders a heading", () => {
    render(<Navbar />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
