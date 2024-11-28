import { render, screen } from "@testing-library/react";
import { FormItem } from "@/app/_components/ui/form";

describe("FormItem", () => {
  it("should render the FormItem with the spacing class", () => {
    render(
      <FormItem className="custom-class">
        <div>Test Form Item</div>
      </FormItem>,
    );
    expect(screen.getByText("Test Form Item")).toBeInTheDocument();
    expect(screen.getByText("Test Form Item").parentElement).toHaveClass(
      "space-y-2",
    );
    expect(screen.getByText("Test Form Item").parentElement).toHaveClass(
      "custom-class",
    );
  });
});
