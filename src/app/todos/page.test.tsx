import { afterEach, expect, test } from "vitest";
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";

import TodoPage from "./page";

afterEach(() => cleanup());

test("TodoPage should render empty message correctly", () => {
  render(<TodoPage />);

  expect(screen.getByText(/no tasks todo/i)).toBeDefined();
});

test("TodoPage should add todo items correctly on the list", async () => {
  const addTodoText = "Make a test with this component";

  render(<TodoPage />);

  act(() => {
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: addTodoText },
    });
  });

  act(() => {
    fireEvent.click(screen.getByRole("button", { name: /add/i }));
  });

  expect(screen.getByText(addTodoText)).toBeDefined();
});
