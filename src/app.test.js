import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import App from "./app";

test("gets updated text on reload", () => {
  const utils1 = render(<App />);
  const textArea1 = utils1.getByTestId("notes-text-area");
  fireEvent.change(textArea1, { target: { value: "apple" } });

  cleanup();

  const utils2 = render(<App />);
  const textArea2 = utils2.getByTestId("notes-text-area");
  expect(textArea2.value).toBe("apple");
});
