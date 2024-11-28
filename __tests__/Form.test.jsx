import { render, screen } from "@testing-library/react";
import { Form } from "@/app/_components/ui/form";

describe("Form", () => {
  it("should render the FormProvider correctly", () => {
    render(
      <Form>
        <div>Test Form</div>
      </Form>,
    );
    expect(screen.getByText("Test Form")).toBeInTheDocument();
  });
});
