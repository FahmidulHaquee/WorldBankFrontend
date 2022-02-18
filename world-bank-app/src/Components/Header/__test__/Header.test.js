import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { unmountComponentAtNode } from "react-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Header component must include all elements", () => {
  test("Home button must load", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const homeButton = screen.getByTestId("home-button");
    expect(homeButton).toBeInTheDocument();
  });

  test("History button must load", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const historyButton = screen.getByTestId("history-button");
    expect(historyButton).toBeInTheDocument();
  });

  test("Log out button must load", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const logoutButton = screen.getByTestId("log-out-button");
    expect(logoutButton).toBeInTheDocument();
  });
});

describe("Buttons should have correct display values", () => {
  test("Home button must have correct text", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const homeButtonText = screen.getByTestId("home-button");
    expect(homeButtonText.innerHTML).toBe("Home");
  });
});
