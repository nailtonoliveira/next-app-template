import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import TodoPage from "./page";

test("TodoPage should render empty message correctly", () => {
  render(<TodoPage />);

  expect(screen.getByText(/no tasks todo/i)).toBeDefined();
});
