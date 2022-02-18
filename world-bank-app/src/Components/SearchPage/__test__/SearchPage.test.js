import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { unmountComponentAtNode } from "react-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchPage from "../SearchPage";

// jest src/Components/SearchPage/__test__/SearchPage.test.js

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

describe("Search page should include all elements", () => {
  test("Home button must load", () => {
    render(
      <Router>
        <SearchPage />
      </Router>
    );
    const homeButton = screen.getByTestId("home-button");
    expect(homeButton).toBeInTheDocument();
  });

  test("History button must load", () => {
    render(
      <Router>
        <SearchPage />
      </Router>
    );
    const historyButton = screen.getByTestId("history-button");
    expect(historyButton).toBeInTheDocument();
  });

  test("Log out button must load", () => {
    render(
      <Router>
        <SearchPage />
      </Router>
    );
    const logoutButton = screen.getByTestId("log-out-button");
    expect(logoutButton).toBeInTheDocument();
  });

  test("Welcome div must load", () => {
    render(
      <Router>
        <SearchPage />
      </Router>
    );
    const welcomeArticle = screen.getByTestId("welcome-article");
    expect(welcomeArticle).toBeInTheDocument();
  });

  test("Add another country button must load", () => {
    render(
      <Router>
        <SearchPage />
      </Router>
    );
    const addButton = screen.getByTestId("add-country-button");
    expect(addButton).toBeInTheDocument();
  });

  test("Submit button must load", () => {
    render(
      <Router>
        <SearchPage />
      </Router>
    );
    const submitButton = screen.getByTestId("submit-button");
    expect(submitButton).toBeInTheDocument();
  });

  test("Country input must load", () => {
    render(
      <Router>
        <SearchPage />
      </Router>
    );
    const countryInput = screen.getByPlaceholderText("Enter a Country...");
    expect(countryInput).toBeInTheDocument();
  });

  test("Indicator input must load", () => {
    render(
      <Router>
        <SearchPage />
      </Router>
    );
    const indicatorInput = screen.getByPlaceholderText("Enter an Indicator...");
    expect(indicatorInput).toBeInTheDocument();
  });

  test("Start year input must load", () => {
    render(
      <Router>
        <SearchPage />
      </Router>
    );
    const startYearInput = screen.getByTestId("start-year-input");
    expect(startYearInput).toBeInTheDocument();
  });

  test("End year input must load", () => {
    render(
      <Router>
        <SearchPage />
      </Router>
    );
    const endYearInput = screen.getByTestId("end-year-input");
    expect(endYearInput).toBeInTheDocument();
  });
});

describe("Country search form should have corrects inputs", () => {
  test("Country search field must not be filled", () => {
    render(
      <Router>
        <SearchPage />
      </Router>
    );
    const countryInput = screen.getByPlaceholderText("Enter a Country...");
    expect(countryInput).toHaveDisplayValue("");
  });

  test("Indicator field must not be filled", () => {
    render(
      <Router>
        <SearchPage />
      </Router>
    );
    const indicatorInput = screen.getByPlaceholderText("Enter an Indicator...");
    expect(indicatorInput).toHaveDisplayValue("");
  });
});
