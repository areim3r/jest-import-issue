import { render } from "@testing-library/react";
import { TestComponent } from "./TestComponent";

describe("Button", () => {
  it.skip("renders a select", () => {
    {
      /* If you comment out the render(), the import error goes away */
    }
    render(<TestComponent></TestComponent>);
  });
});
