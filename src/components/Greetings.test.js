import { render, screen } from "@testing-library/react";
import Greeting from "./Greetings";

//Test Suite
describe("Greeting componnt test", () => {
  // Test
  test("renders hello world as a text", () => {
    //Use AAA's for testing
    // A Arrange the code and render the component
    render(<Greeting />); // rendering the component
    //A act - simulate the functionality
    //... for this case nothing as there is not action taking place

    //A Assert the results - verify the tests with the coming and the expected results
    const helloWorldElement = screen.getByText("Hello World!", {
      exact: false,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });
});
