import { render, screen } from "@testing-library/react";
import Async from "./Async";
describe("Async test suite", () => {
  test("renders post if request suceeds", async () => {
    render(<Async />);
    const listitemElements = await screen.findAllByRole("listitem"); //use of find for async req as it returns promise
    expect(listitemElements).not.toHaveLength(0);
  });
});
