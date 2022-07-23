import { render, screen } from "@testing-library/react";
import Async from "./Async";
describe("Async test suite", () => {
  test("renders post if request suceeds", async () => {
    //Arrange
    //use of mock, coverting fetch function into mock
    window.fetch = jest.fn();
    //Simulation of response of returing a json object which will wait and provide array of items
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First Post" }],
    });
    render(<Async />);

    //Action
    //nothing
    //Asser
    const listitemElements = await screen.findAllByRole("listitem"); //use of find for async req as it returns promise
    expect(listitemElements).not.toHaveLength(0);
  });
});
