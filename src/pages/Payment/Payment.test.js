import { screen, render } from "@testing-library/react";
import Payment from "./Payment";

describe("Payment of functionality", () => {
  test("Payment renders", () => {
    render(<Payment />);
  });
});
