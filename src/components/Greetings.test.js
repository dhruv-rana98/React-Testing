import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  test("renders button and paragraph text", () => {
    render(<Greeting />);
    const button = screen.getByText("Change Text!");
    const paragraph = screen.getByText("It's good to see you.");
    expect(button).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });
  test("render changed if the button was clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const button = screen.getByRole("button");
    userEvent.click(button);

    //Assert
    const outputElement = screen.getByText("Changed");
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const button = screen.getByRole("button");
    userEvent.click(button);

    //Assert
    const outputElement = screen.queryByText("It's good to see you."); //As getByText will throw error if the element is not found
    expect(outputElement).toBeNull();
  });
});
